export interface ToastProps{
    toasts: ToastModel[],
    position: ToastPosition;
}


export interface ToastModel{
    ID: string,
    visible: boolean;
    message: string;
    title: string;
    seconds: number;
    type: ToastType;
}

export enum ToastPosition{
    TOP_RIGHT = 'top-right',
    TOP_LEFT = 'top-left',
    BOTTOM_RIGHT = 'bottom-right',
    BOTTOM_LEFT = 'bottom-left',
    CENTER = 'center',
}
export enum ToastType {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}