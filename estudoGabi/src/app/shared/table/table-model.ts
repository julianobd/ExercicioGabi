export interface TableColumn{
  columnName:string;
  displayName:string;
  dataType: 'true' | 'false'
}
export interface TableAction {
  iconClass: string;
  eventName?: string;

}
