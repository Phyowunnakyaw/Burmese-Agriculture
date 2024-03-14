import React from 'react'
import NavBar from '../../components/NavBar'
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './style.css'

export default function Layout() {

     let location = useLocation();

  return (
         
         <div>

              <NavBar />

              <SwitchTransition>
                  <CSSTransition timeout={100} classNames='fade' key={ location.pathname  } >
                      <div>

                          <Outlet />

                      </div>
                  </CSSTransition>
              </SwitchTransition>

         </div>
  )
}
