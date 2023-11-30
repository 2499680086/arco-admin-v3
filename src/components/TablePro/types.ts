import type { TableColumnData, TableData } from '@arco-design/web-vue'
import type { VNode } from 'vue'

export type TableSize = 'mini' | 'small' | 'medium' | 'large'

export type positionType = 'tl' | 'top' | 'tr' | 'bl' | 'bottom' | 'br'

export interface TableScroll {
  x?: number | string
  y?: number | string
  minWidth?: number | string
  maxHeight?: number | string
}

export interface VirtualListProps {
  height?: number | string
  threshold?: number
  isStaticItemHeight?: boolean
  fixedSize?: boolean
  estimatedSize?: number
  buffer?: number
}

export interface TableProColumn extends TableColumnData {
  title?: any,
  enum?: { [key: string | number]: any }
  hideInSearch?: boolean
  hideInTable?: boolean
  hideInDrawer?: boolean
  renderCell?: (v: any) => any
  renderFormItem?: (record: TableData) => VNode
  renderTableItem?: (record: TableData, rowIndex: number) => JSX.Element
}
