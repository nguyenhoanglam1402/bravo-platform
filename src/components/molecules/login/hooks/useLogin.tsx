import { toast } from 'react-toastify'
import { useLoginAccountMutation } from '../../../../services/authenticate.service'
import { TLoginPayload } from '../types/types'
import { useNavigate } from 'react-router-dom'
import { useLazyGetUserDataQuery } from '../../../../services/user.service'
import Cookies from 'js-cookie'
import { ECookieKey } from '../../../../constants/storage/cookie-key.const'
import { ROUTER_MAP } from '../../../../constants/router-map'

const useLogin = () => {
  const [sendLoginInfor, { isLoading }] = useLoginAccountMutation()
  const [getUserData, { isLoading: isUserLoading }] = useLazyGetUserDataQuery({ refetchOnReconnect: true })
  const navigate = useNavigate()

  const onHandleLogin = async (value: TLoginPayload) => {
    const idToast = toast.loading('Authenticating, please wait for a sec...', { position: 'bottom-right' })
    try {
      const res = await sendLoginInfor(value).unwrap()

      if (res.error) {
        toast.update(idToast, {
          render: `Authenticate Failed: Username or password is incorrect.`,
          type: 'error',
          isLoading: isLoading,
          autoClose: 5000
        })
        return
      }
      Cookies.set(ECookieKey.TOKEN, res.data.access_token)
      const uRes = await getUserData({}).unwrap()

      if (uRes.error) {
        toast.update(idToast, {
          render: `Authenticate Failed: Username or password is incorrect.`,
          type: 'error',
          isLoading: isLoading,
          autoClose: 5000
        })
        return
      }
      navigate(ROUTER_MAP.MAIN_SECTOR.HOME.path, { replace: true })
      toast.update(idToast, {
        render: `Welcome ${uRes.data.fullname} to Bravo`,
        type: 'success',
        isLoading: isLoading,
        autoClose: 5000
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.update(idToast, { render: error.message, type: 'error', isLoading: isLoading, autoClose: 5000 })
      }
    }
  }
  return [{ loginBtnState: isLoading || isUserLoading }, { onHandleLogin }] as const
}

export default useLogin
