'use client'

export function RegisterForm () {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') ?? ''
    const password = form.get('password') ?? ''

    // Verificas que los datos sean correctos

    // Aqui haces tu logica de pasar datos al servidor
    console.log({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} >
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
    </form>
  )
}
