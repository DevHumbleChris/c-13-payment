import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const authenticated = useSelector(state => state.auth.authenticated)
  if (!authenticated) {
    return <Navigate to='/login' replace />
  }
  return children ? children : <Outlet />
}
