'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useFormStatus, useFormState } from 'react-dom'
import createQv from '@/app/server-actions/createQv'
import React, { useEffect, useRef } from 'react'

export function QvsCreate() {
  // TODO: useOptimistic and types. clean the hacky code
  const formRef = useRef<HTMLFormElement>(null)
  const initialState = {
    errorContent: '',
    doneWithSuccess: false,
    submitCount: 0
  }
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(createQv, initialState)

  useEffect(() => {
    if (state.doneWithSuccess === true && formRef.current !== null) {
      formRef.current.reset()
    }
  }, [state.submitCount])

  return (
    <form action={formAction} className="flex flex-col gap-y-4" ref={formRef}>
      <Textarea
        name="content"
        placeholder="Send a QV"
        className="border-white border-opacity-20 bg-bg-qvs ring-offset-white/90 focus-visible:ring-0 focus-visible:ring-offset-1 focus-visible:ring-offset-white/50"
        rows={4}
      ></Textarea>
      {state.errorContent !== '' && (
        <span className="text-red-500 text-sm">{state.errorContent}</span>
      )}
      <Button
        type="submit"
        className="self-end rounded-full bg-primary"
        disabled={pending}
      >
        Send
      </Button>
    </form>
  )
}
