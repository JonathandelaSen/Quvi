export function QvsList ({ qvs }: { qvs: any[] | null }) {
  return (
    <>
      {qvs?.map((qv) => {
        return (
          <pre key={qv?.id ?? ''}>
            {JSON.stringify(qv, null, 2)}
          </pre>
        )
      })}
    </>
  )
}
