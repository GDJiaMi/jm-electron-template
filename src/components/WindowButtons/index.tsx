import { remote, BrowserWindow } from 'electron'
import React from 'react'

import { ReactComponent as CloseIcon } from './close.svg'
import { ReactComponent as MaximizeIcon } from './maximize.svg'
import { ReactComponent as MinimizeIcon } from './minimize.svg'
import './style.css'
import { WindowButton } from './WindowButton'

export interface WindowButtonsProps {
  onMinimize?: () => false | void
  onMaximize?: () => false | void
  onClose?: () => false | void
}

interface State {
  minimizable?: boolean
  maximizable?: boolean
}

/**
 * 窗口按钮
 */
export default class WindowButtons extends React.PureComponent<WindowButtonsProps, State> {
  public static Button = WindowButton
  public state: State
  private win: BrowserWindow

  public constructor(props: WindowButtonsProps) {
    super(props)
    this.win = remote.getCurrentWindow()
    this.state = {
      minimizable: this.win.isMinimizable(),
      maximizable: this.win.isMaximizable(),
    }
  }

  public render() {
    const { minimizable, maximizable } = this.state
    return (
      <div className="window-buttons">
        {this.props.children}
        {minimizable && (
          <WindowButton onClick={this.handleMinimize}>
            <MinimizeIcon />
          </WindowButton>
        )}
        {maximizable && (
          <WindowButton onClick={this.handleMaximize}>
            <MaximizeIcon />
          </WindowButton>
        )}
        <WindowButton onClick={this.handleClose}>
          <CloseIcon />
        </WindowButton>
      </div>
    )
  }

  private handleMinimize = () => {
    if (this.props.onMinimize && this.props.onMinimize() === false) {
      return
    }

    this.win.minimize()
  }

  private handleMaximize = () => {
    if (this.props.onMaximize && this.props.onMaximize() === false) {
      return
    }

    this.win.maximize()
  }

  private handleClose = () => {
    if (this.props.onClose && this.props.onClose() === false) {
      return
    }
    this.win.close()
  }
}
