import dynamic from 'next/dynamic'
import React, { PropsWithChildren } from 'react'

// biome-ignore lint/complexity/noBannedTypes: no props to pass
const NoSsr = ({ children }: PropsWithChildren<{}>) => (
  <React.Fragment>{children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})
