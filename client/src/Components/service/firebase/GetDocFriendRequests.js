import { doc, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { database } from '../../../firebase';
import { AppContext } from '../../provider/AppProvider';
import { AuthContext } from '../../provider/AuthProvider';

// Nhận yêu cầu kết bạn 

function GetDocFriendRequests() {

    let { currentUser } = React.useContext(AuthContext);
    const { setProgress, setIsLoadFriendRequest, isLoadUserFriends } = React.useContext(AppContext);
    if(!currentUser){
        currentUser = {bod:1,bom:1,boy:1903,email:'minhnhat.03091993@gmail.com',fullName:'Nguyễn Minh Nhật',id:'rAzovMPn16eqf5xtsriaFPL7x9j2',joinDate:'September 3th 2002, 12:00:00 am',phoneNumber:"+84",photoURL:"https://firebasestorage.googleapis.com/v0/b/chat-810d7.appspot.com/o/images%2FLOGO%20IUH.jpg?alt=media&token=3d70a72f-7f07-4236-8d72-a5e60a73e4f8",role:["MEMBER"],sex:false,slogan:'Xin chào bạn, mình là người tham gia mới', keywords: ["P", "Ph"]};
    }
    const { id } = currentUser;
    const [document, setDocument] = React.useState(null);

    React.useEffect(() => {
        if(isLoadUserFriends) {
            const unsubcriber = onSnapshot(doc(database, "FriendRequests", id), (doc) => {
                if(doc.exists()) {//TH FriendRequest của user có doc tồn tại nếu else trả về null
                    setDocument(doc.data());
                }
            });
            setProgress(prev => prev + 14);
            setIsLoadFriendRequest(true);
            return unsubcriber;
        }
    },[id, isLoadUserFriends, setIsLoadFriendRequest, setProgress]);

    return document;
}

export default GetDocFriendRequests;