export type Permission = 'denied' | 'granted' | 'default';

export interface PushNotify {
    /**
     * 提醒内容
     * 
     * @type {string}
     */
    body?: string
    /**
     * 图标地址
     * 
     * @type {string}
     */
    icon?: string;
    /**
     * 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除
     * 
     * @type {string}
     */
    tag?: string;
    /**
     * 任意类型和通知相关联的数据。
     * 
     * @type {*}
     */
    data?: any;
    /**
     * 叠高楼，如果指定为 `true` 且 `tag` 有值时；新通知会覆盖旧通知。
     * 
     * @type {boolean}
     */
    renotify?: boolean;
    /**
     * 是否要有声音
     * 
     * @type {boolean}
     */
    silent?: boolean;
    /**
     * 声音地址
     * 
     * @type {string}
     */
    sound?: string;
    /**
     * 是否不再屏幕上显示通知信息
     * 
     * @type {boolean}
     */
    noscreen?: boolean;
    /**
     * 是否通知具有粘性
     * 
     * @type {boolean}
     */
    sticky?: boolean;
    /**
     * 文字方向
     * 
     * @type {('auto' | 'ltr' | 'rtl')}
     * @default 'auto'
     */
    dir?: 'auto' | 'ltr' | 'rtl';
    /**
     * 语言，符串必须在 [!BCP 47 language tag](https://tools.ietf.org/html/bcp47) 文档中是有效的。
     * 
     * @type {string}
     */
    lang?: string;
    /**
     * 振动模式
     * 例如[200, 100, 200]表示设备振动200毫秒，然后停止100毫秒，再振动200毫秒。
     * 
     * @type {number[]}
     */
    vibrate?: number[]
}
