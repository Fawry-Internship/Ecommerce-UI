export interface Coupon {
    id: number,
    code: string,
    discountType: string,
    discountValue: number,
    validFrom: Date,
    validTo: Date,
    usageLimit: number,
    remainingCount: number,
    createdAt: Date
}