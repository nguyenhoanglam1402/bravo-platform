import { LoginForm } from '../../molecules/login/login-form'

function LoginPage() {
  return (
    <div className='flex flex-col gap-6 h-screen items-center justify-center bg-bg-standard'>
      <div className='flex flex-col gap-3 items-center'>
        <p className='text-4xl font-bold font-nunito'>Welcome back, User!</p>
        <p className='text-xl font-semibold text-[#8091a5] font-nunito'>Log in to your Bravo account</p>
      </div>
      <LoginForm />
    </div>
  )
}

export default LoginPage
