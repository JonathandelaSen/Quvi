import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { type Qv } from '@/app/types/qvs'

export function QvsList({ qvs }: { qvs: Qv[] | null }) {
  return (
    <section className="flex flex-col gap-4">
      {qvs?.map((qv) => {
        return (
          <div
            className="flex flex-col gap-6 rounded-lg bg-bg-qvs p-4"
            key={qv.id ?? ''}
          >
            <div className="flex items-center">
              <Image
                className="h-10 w-10 rounded-full"
                src={qv.users?.avatar_url ?? ''}
                alt={'avatar'}
                width={300}
                height={300}
              />
              <div className="ml-4 flex flex-col">
                <span className="text-sm text-white/60">{qv.users?.name}</span>
                <span className="text-sm text-white/60">
                  @{qv.users?.username}
                </span>
              </div>
              <Button className="ml-auto rounded-full bg-primary/20">
                Action
              </Button>
            </div>

            <p>{qv.content}</p>

            {/* <pre key={qv?.id ?? ''}>{JSON.stringify(qv, null, 2)}</pre> */}
          </div>
        )
      })}
    </section>
  )
}
