/* eslint-disable no-unused-vars */
import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { database } from '../../../firebase';
import { AppContext } from '../../provider/AppProvider';
import { AuthContext } from '../../provider/AuthProvider';


//Xử lý mảng List Friend

function GetFriends() {

    let { currentUser } = React.useContext(AuthContext);
    const { setProgress, setIsLoadUserFriends, isLoadRooms, users } = React.useContext(AppContext);
    if(!currentUser){
        currentUser = {bod:1,bom:1,boy:1903,email:'minhnhat.03091993@gmail.com',fullName:'Nguyễn Minh Nhật',id:'rAzovMPn16eqf5xtsriaFPL7x9j2',joinDate:'September 3th 2002, 12:00:00 am',phoneNumber:"+84",photoURL:"https://firebasestorage.googleapis.com/v0/b/chat-810d7.appspot.com/o/images%2FLOGO%20IUH.jpg?alt=media&token=3d70a72f-7f07-4236-8d72-a5e60a73e4f8",role:["MEMBER"],sex:false,slogan:'Xin chào bạn, mình là người tham gia mới', keywords: ["P", "Ph"]};
    }
    const { id } = currentUser;
    const [friends, setFriends] = React.useState([]);

    React.useEffect(() => {
        if(isLoadRooms) {
            const unsubcriber = onSnapshot(doc(database, "Friends", id), (document) => {
                const listFriendFactoryed = [];
                if(document.data() !== undefined){
                    const listIdFriend = document.data().listFriend;    //Mảng id bạn bè
                    for(let i=0; i<listIdFriend.length;i++) {
                        for(let j=0; j<users.length; j++) {
                            if(listIdFriend[i] === users[j].id) {
                                listFriendFactoryed.push(users[j]);
                            }
                        }
                    }
                }
                setFriends(listFriendFactoryed);
                setProgress(prev => prev + 14);
                setIsLoadUserFriends(true);
            });
            return unsubcriber;
        }
    }, [id, isLoadRooms, setIsLoadUserFriends, setProgress, users]);

  return friends;
}

export default GetFriends;