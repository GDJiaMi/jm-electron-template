/**
 * 设置页面
 */
import React from 'react'
import Page from '~/components/Page'

import Tabs from './components/Tabs'

export default () => {
  return (
    <Page light={false} title="设置">
      <Tabs>
        <Tabs.Panel index="base" title="基本参数">
          基本参数
        </Tabs.Panel>
        <Tabs.Panel index="theme" title="主题设置">
          主题设置
        </Tabs.Panel>
      </Tabs>
    </Page>
  )
}
