declare namespace TYPE {
    interface ICopyText {
        /** 要复制的文本 */
        value: string
        /** 回调函数 */
        callback?: (args?: any) => void
    }

    /**
     * @interface 全屏
     */
    interface IFullScreenAbleHTMLElement {
        mozRequestFullScreen?: () => Promise<void> | undefined;
        webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void> | undefined;
        msRequestFullscreen?: () => Promise<void> | undefined;
        requestFullscreen?: (options?: FullscreenOptions) => Promise<void> | undefined;
    }

    /**
     * @interface 退出全屏
     */
    interface IExitFullScreenAbleHTMLElement {
        mozCancelFullScreen?: () => void;
        webkitExitFullscreen?: () => Promise<void>;
        msExitFullscreen?: () => void;
        exitFullscreen?: () => Promise<void>;
    }



}