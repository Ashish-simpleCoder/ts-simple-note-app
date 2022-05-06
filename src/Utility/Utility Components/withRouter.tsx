import { lazy } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import WithSuspense from './WithSuspense'

const HomePage = lazy(() => import( '../../Pages/Home/Home.page' /* webpackChunkName: 'homePage' */))
const LoginPage = lazy(() => import( '../../Pages/Login/Login.page' /* webpackChunkName: 'loginPage' */))
const NotePage = lazy(() => import( '../../Pages/Note/Note.page' /* webpackChunkName: 'notePage' */))
const SignupPage = lazy(() => import( '../../Pages/Signup/Signup.page' /* webpackChunkName: 'signupPage' */))



const withRouter = (Props: ChildrenType) => {
  return (
      <HashRouter>
      <Props>
              <main>
              <Routes>
                  <Route path='/' element={<WithSuspense Comp={HomePage} />}></Route>
                  <Route path='signup' element={<WithSuspense Comp={SignupPage} />}></Route>
                  <Route path='login' element={<WithSuspense Comp={LoginPage} />}></Route>
                  <Route path='note' element={<WithSuspense Comp={NotePage} />}></Route>
              </Routes>
              </main>
        </Props>
      </HashRouter>
  )
}
export default withRouter