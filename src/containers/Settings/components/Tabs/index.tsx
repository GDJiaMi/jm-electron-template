import React from 'react'
import { cls } from '~/utils'

import './style.css'
import { TabPanel, TabPanelProps } from './TabPanel'

export interface TabsProps {
  defaultIndex?: string
}

interface State {
  index?: string
}

export default class Tabs extends React.Component<TabsProps, State> {
  public static Panel = TabPanel

  public state = {
    index: this.props.defaultIndex,
  }

  public render() {
    const children = React.Children.toArray(this.props.children) as React.FunctionComponentElement<TabPanelProps>[]
    const activeIndex = this.state.index || children[0].props.index

    return (
      <div className="tabs">
        <div className="tabs__header">
          {children.map(i => (
            <div
              className={cls({ active: activeIndex === i.props.index }, 'tabs__tab')}
              data-index={i.props.index}
              key={i.props.index}
              onClick={this.handleClick}
            >
              {i.props.title}
            </div>
          ))}
        </div>
        <div className="tabs__panels">
          {children.map(i => (
            <div className={cls({ active: activeIndex === i.props.index }, 'tabs__panel')} key={i.props.index}>
              {i.props.children}
            </div>
          ))}
        </div>
      </div>
    )
  }

  private handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    const index = evt.currentTarget.dataset.index!
    this.setState({ index })
  }
}
