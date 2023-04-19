import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../service/auth/auth.service'


export const authGuard = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  
  if(!authService.isLogin()) router.parseUrl('/login')

  return  authService.isLogin()
}