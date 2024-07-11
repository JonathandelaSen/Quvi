'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useFormStatus, useFormState } from 'react-dom'
import React, { useEffect, useRef } from 'react'
import createQv from '@/app/server-actions/create-qv'

export type CreateQvFormState = {
  errorContent: string
  doneWithSuccess: boolean
  submitCount: number
}
// useFormStatus must be wrapped inside a form, otherwise it will not react to submit
function Submit() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      className="rounded-full bg-primary"
      disabled={pending}
    >
      Send
    </Button>
  )
}

export function QvsCreateForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const initialState: CreateQvFormState = {
    errorContent: '',
    doneWithSuccess: false,
    submitCount: 0
  }
  const [state, formAction] = useFormState(createQv, initialState)

  useEffect(() => {
    if (state.doneWithSuccess && formRef.current !== null) {
      formRef.current.reset()
    }
  }, [state.submitCount])

  return (
    <form action={formAction} className="flex flex-col" ref={formRef}>
      <Textarea
        name="content"
        placeholder="Send a QV"
        className="mb-2 border-white border-opacity-20 bg-bg-qvs ring-offset-white/90 focus-visible:ring-0 focus-visible:ring-offset-1 focus-visible:ring-offset-white/50"
        rows={4}
      ></Textarea>
      {state.errorContent !== '' && (
        <span className="text-text-error text-sm">{state.errorContent}</span>
      )}
      <div className="mt-4 self-end">
        <Submit />
      </div>
    </form>
  )
}
