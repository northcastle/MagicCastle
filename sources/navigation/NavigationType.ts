// 一个一个的元素
export interface ItemA{
    iconUrl?:string,
    nameStr?:string,
    linkUrl?:string,
}

// 一个大分类
export interface NavigationItemObject{
    title?:string,
    desc?:string,
    iconUrl?:string,
    itemList?:Array<ItemA>
}