import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Envoi en cours...')

    try {
      const res = await fetch('../../serveur/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('Message envoyé !')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Erreur : ' + (data.error || 'Échec de l’envoi'))
      }
    } catch (err) {
      setStatus('Erreur réseau')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
        rows={5}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
      {status && <p>{status}</p>}
    </form>
  )
}
