type Props = {
  timestamp: string
}

export default function DateFormatter({ timestamp }: Props) {
  const date = new Date(timestamp)
  var jsDate = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })

  return (
    <>
      {jsDate}
    </>
  )
}