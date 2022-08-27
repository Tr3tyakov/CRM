<<<<<<< HEAD

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
=======
export interface IHorizontalPanel{
    title: string,
    quantity: number,
    checked: boolean

}


>>>>>>> 9326ae53b188f5cd7d428e6134289a38b54127e6
