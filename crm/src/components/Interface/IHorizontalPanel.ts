
export interface IPanel{
    title: string,
    quantity: number,
    checked: boolean
}

export interface IHorizontalPanel{
    panels:IPanel[],
    horizontalPanelOn:boolean
}


type TypeString = string

export interface IPanelAction {
    payload:{
        title: string,
        checked: boolean
    }
    type: TypeString
}

export interface IHorizontalMenuAction{
    payload:boolean,
    type: TypeString
}
