export interface StockConsumption{
    id:number,
    storeId:number,
    productCode:string,
    quantityBeforeUpdate:number,
    quantityAfterUpdate:number,
    createdAt:Date;
}