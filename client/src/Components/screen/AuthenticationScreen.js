/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useReducer, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../css/AuthenticationScreen.css";
import { FaCopyright, FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { WhiteBoxReducerContext } from '../provider/WhiteBoxReducerProvider';

export default function AuthenticationScreen() {

    const { myState } = useContext(WhiteBoxReducerContext);

  return (
    <div id='myOuter'>
      <div id='recaptcha-container'></div>

      <div className='text-center'>
        <h1>Zalo</h1>  
        <br />
              {/* WhiteBox Component */}
              {myState}
          <div className='pt-3'>
              
              <br />
          </div>
      </div>
      <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <p className="modal-title">Trợ giúp đăng nhập</p>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
              </div>
          </div>
      </div>

    </div>
  );
}
