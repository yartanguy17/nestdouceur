import { Menu } from "../model/menu.entity"

export class PaginatedMenusResultDto {
    data: Menu[]
    page: number
    limit: number
    totalCount: number
  }