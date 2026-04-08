'use client'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/dialog'
import FormFieldsSportsItem from './form-fields-sports-item'
import { updateSportsItem } from '@/actions/products'
import { filterFormData } from '@/services/filter-form-data'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/use-toast'
import { sportsItemType } from '@/types/sportsItem'
import { ResponseErrorType, api } from '@/services/api'

interface DialogUpdateSportsItemProps {
  id: string
  children: React.ReactNode
}

export function DialogUpdateSportsItem({ id, children }: DialogUpdateSportsItemProps) {
  const [sportsItem, setSportsItem] = useState<sportsItemType | null>(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<ResponseErrorType | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (!open) return

    setSportsItem(null)
    setError(null)

    const requestData = async () => {
      const { response, error } = await api<sportsItemType>('GET', `/products/${id}`)

      if (response) {
        setSportsItem(response)
      } else {
        console.error('Erro ao buscar produto:', error)
        setSportsItem(null)
        toast({
          title: 'Artigo esportivo não encontrado!',
          description: error?.message,
        })
        setOpen(false)
      }
    }

    requestData()
  }, [id, open, toast])

  const submit = async (form: FormData) => {
    try {
      const newForm = await filterFormData(form)

      console.log('FormData update:')
      for (const [key, value] of newForm.entries()) {
        console.log(key, value)
      }

      const rawResult = await updateSportsItem(newForm)
      console.log('Retorno bruto updateSportsItem:', rawResult)

      const parsedResult = JSON.parse(rawResult)
      console.log('Retorno parseado updateSportsItem:', parsedResult)

      const { error } = parsedResult

      if (error) {
        setError(error)
        console.error('Erro no update:', error)
        toast({
          title: 'Não foi possível editar o artigo esportivo!',
          description: error?.message || 'Verifique o console.',
        })
        return
      }

      toast({
        title: 'Artigo esportivo editado com sucesso!',
      })
      setOpen(false)
    } catch (err) {
      console.error('Erro inesperado no update:', err)
      toast({
        title: 'Erro inesperado ao editar o artigo esportivo!',
        description: 'Veja o console do navegador.',
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar artigo esportivo</DialogTitle>
          <DialogDescription>
            Atualize as informações do artigo esportivo abaixo e clique em
            &quot;Salvar&quot; para aplicar as alterações.
          </DialogDescription>
        </DialogHeader>

        <form action={submit}>
          <FormFieldsSportsItem error={error} sportsItem={sportsItem} />
        </form>
      </DialogContent>
    </Dialog>
  )
}