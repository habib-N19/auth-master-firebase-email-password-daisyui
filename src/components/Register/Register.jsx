import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'

const Register = () => {
  const { user, createUser } = useContext(AuthContext)
  //   console.log(user)

  const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        form.reset();
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-8'>Register Please!</h1>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleRegister} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='text'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                name='password'
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Register</button>
            </div>
            <label className='label'>
              <Link to='/login' className='label-text-alt link link-hover'>
                Already have an account?
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register