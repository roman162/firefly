export const state = () => ({
  activeCategory: 1,
  activeType: 'stroke',
  categories: [
    {
      id: 1,
      title: 'base'
    },
    {
      id: 2,
      title: 'sound'
    },
    {
      id: 3,
      title: 'economic'
    },
    {
      id: 4,
      title: 'media'
    },
    {
      id: 5,
      title: 'arrows'
    },
    {
      id: 6,
      title: 'weather'
    },
    {
      id: 7,
      title: 'file'
    }
  ],
  icons: [
    { title: 'media-plus', url: '', id: 10000, category: 2, type: 'all' },
    { title: '@', url: '', id: 10168, category: 1, type: 'stroke' },
    { title: 'abacus', url: '', id: 10183, category: 3, type: 'all' },
    { title: 'airplay', url: '', id: 10038, category: 4, type: 'all' },
    { title: 'align-center-bottom', url: '', id: 10106, category: 1, type: 'all' },
    { title: 'align-center-horizontal', url: '', id: 10107, category: 1, type: 'all' },
    { title: 'align-center-vertical', url: '', id: 10104, category: 1, type: 'all' },
    { title: 'align-left', url: '', id: 10109, category: 1, type: 'all' },
    { title: 'align-right', url: '', id: 10105, category: 1, type: 'all' },
    { title: 'align-top', url: '', id: 10108, category: 1, type: 'all' },
    { title: 'anchor', url: '', id: 10164, category: 1, type: 'stroke' },
    { title: 'aperture', url: '', id: 10135, category: 1, type: 'all' },
    { title: 'apps-2', url: '', id: 10130, category: 1, type: 'all' },
    { title: 'apps', url: '', id: 10086, category: 1, type: 'all' },
    { title: 'arrow-2-bottom', url: '', id: 10067, category: 5, type: 'stroke' },
    { title: 'arrow-2-left', url: '', id: 10069, category: 5, type: 'stroke' },
    { title: 'arrow-2-right', url: '', id: 10068, category: 5, type: 'stroke' },
    { title: 'arrow-2-top', url: '', id: 10066, category: 5, type: 'stroke' },
    { title: 'arrow-3-bottom-2', url: '', id: 10212, category: 5, type: 'stroke' },
    { title: 'arrow-3-bottom', url: '', id: 10213, category: 5, type: 'stroke' },
    { title: 'arrow-3-left', url: '', id: 10214, category: 5, type: 'stroke' },
    { title: 'arrow-3-right', url: '', id: 10215, category: 5, type: 'stroke' },
    { title: 'arrow-4-bottom', url: '', id: 10061, category: 5, type: 'stroke' },
    { title: 'arrow-4-left', url: '', id: 10063, category: 5, type: 'stroke' },
    { title: 'arrow-4-right', url: '', id: 10062, category: 5, type: 'stroke' },
    { title: 'arrow-4-top', url: '', id: 10060, category: 5, type: 'stroke' },
    { title: 'arrow-5-bottom', url: '', id: 10208, category: 5, type: 'stroke' },
    { title: 'arrow-5-left', url: '', id: 10210, category: 5, type: 'stroke' },
    { title: 'arrow-5-right', url: '', id: 10211, category: 5, type: 'stroke' },
    { title: 'arrow-5-top', url: '', id: 10209, category: 5, type: 'stroke' },
    { title: 'arrow-6-bottom', url: '', id: 10205, category: 5, type: 'stroke' },
    { title: 'arrow-6-left', url: '', id: 10203, category: 5, type: 'stroke' },
    { title: 'arrow-6-right', url: '', id: 10202, category: 5, type: 'stroke' },
    { title: 'arrow-6-top', url: '', id: 10204, category: 5, type: 'stroke' },
    { title: 'arrow-bottom-left', url: '', id: 10058, category: 5, type: 'stroke' },
    { title: 'arrow-bottom-right', url: '', id: 10059, category: 5, type: 'stroke' },
    { title: 'arrow-bottom', url: '', id: 10216, category: 5, type: 'stroke' },
    { title: 'arrow-left', url: '', id: 10218, category: 5, type: 'stroke' },
    { title: 'arrow-right', url: '', id: 10219, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right-2', url: '', id: 10220, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right-3', url: '', id: 10207, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right-4', url: '', id: 10206, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right-5', url: '', id: 10245, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right-6', url: '', id: 10244, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-left-right', url: '', id: 10223, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-top-bottom-2', url: '', id: 10221, category: 5, type: 'stroke' },
    { title: 'arrow-sid/es-top-bottom', url: '', id: 10222, category: 5, type: 'stroke' },
    { title: 'arrow-top-left', url: '', id: 10065, category: 5, type: 'stroke' },
    { title: 'arrow-top-right', url: '', id: 10064, category: 5, type: 'stroke' },
    { title: 'arrow-top', url: '', id: 10217, category: 5, type: 'stroke' },
    { title: 'art-tool', url: '', id: 10139, category: 1, type: 'all' },
    { title: 'avatar', url: '', id: 10136, category: 1, type: 'all' },
    { title: 'backward-5sec', url: '', id: 10043, category: 4, type: 'stroke' },
    { title: 'backward-10sec', url: '', id: 10041, category: 4, type: 'stroke' },
    { title: 'bag', url: '', id: 10122, category: 1, type: 'all' },
    { title: 'bell-off', url: '', id: 10118, category: 1, type: 'all' },
    { title: 'bell', url: '', id: 10119, category: 1, type: 'all' },
    { title: 'calculator', url: '', id: 10182, category: 3, type: 'stroke' },
    { title: 'camera-off', url: '', id: 10039, category: 4, type: 'all' },
    { title: 'camera', url: '', id: 10040, category: 4, type: 'all' },
    { title: 'candlestick-2', url: '', id: 10187, category: 3, type: 'all' },
    { title: 'candlestick', url: '', id: 10188, category: 3, type: 'all' },
    { title: 'card-check', url: '', id: 10199, category: 3, type: 'all' },
    { title: 'card-description', url: '', id: 10200, category: 3, type: 'all' },
    { title: 'card-minus', url: '', id: 10198, category: 3, type: 'all' },
    { title: 'card-plus', url: '', id: 10197, category: 3, type: 'all' },
    { title: 'cast', url: '', id: 10015, category: 4, type: 'stroke' },
    { title: 'check-circle', url: '', id: 10160, category: 1, type: 'stroke' },
    { title: 'check-square', url: '', id: 10159, category: 1, type: 'stroke' },
    { title: 'chromecast', url: '', id: 10016, category: 4, type: 'stroke' },
    { title: 'circle-clock', url: '', id: 10093, category: 1, type: 'all' },
    { title: 'circle-exclamation-mark', url: '', id: 10126, category: 1, type: 'all' },
    { title: 'circle-question-mark', url: '', id: 10166, category: 1, type: 'all' },
    { title: 'clipboard', url: '', id: 10131, category: 1, type: 'stroke' },
    { title: 'close', url: '', id: 10171, category: 1, type: 'stroke' },
    { title: 'cloud-download', url: '', id: 10078, category: 6, type: 'stroke' },
    { title: 'cloud-off', url: '', id: 10083, category: 6, type: 'all' },
    { title: 'cloud-rain-2', url: '', id: 10079, category: 6, type: 'stroke' },
    { title: 'cloud-rain', url: '', id: 10080, category: 6, type: 'stroke' },
    { title: 'cloud-snow', url: '', id: 10081, category: 6, type: 'stroke' },
    { title: 'cloud-zip', url: '', id: 10082, category: 6, type: 'all' },
    { title: 'cloud', url: '', id: 10084, category: 6, type: 'all' },
    { title: 'copy', url: '', id: 10096, category: 1, type: 'all' },
    { title: 'crop', url: '', id: 10156, category: 1, type: 'stroke' },
    { title: 'delete', url: '', id: 10032, category: 4, type: 'all' },
    { title: 'download-2', url: '', id: 10074, category: 5, type: 'stroke' },
    { title: 'download', url: '', id: 10075, category: 5, type: 'stroke' },
    { title: 'entry', url: '', id: 10071, category: 5, type: 'stroke' },
    { title: 'exit', url: '', id: 10072, category: 5, type: 'stroke' },
    { title: 'eye-off', url: '', id: 10098, category: 1, type: 'stroke' },
    { title: 'eye', url: '', id: 10097, category: 1, type: 'all' },
    { title: 'file-arrow-down', url: '', id: 10248, category: 7, type: 'all' },
    { title: 'file-minus', url: '', id: 10246, category: 7, type: 'all' },
    { title: 'file', url: '', id: 10249, category: 7, type: 'all' },
    { title: 'film-2', url: '', id: 10010, category: 4, type: 'all' },
    { title: 'film-3', url: '', id: 10009, category: 4, type: 'all' },
    { title: 'film', url: '', id: 10008, category: 4, type: 'all' },
    { title: 'film', url: '', id: 10051, category: 4, type: 'fill' },
    { title: 'filter', url: '', id: 10133, category: 1, type: 'all' },
    { title: 'fingerprints', url: '', id: 10142, category: 1, type: 'all' },
    { title: 'flip-screen', url: '', id: 10095, category: 1, type: 'all' },
    { title: 'focus', url: '', id: 10055, category: 4, type: 'stroke' },
    { title: 'folder-delete', url: '', id: 10251, category: 7, type: 'stroke' },
    { title: 'folder-minus', url: '', id: 10252, category: 7, type: 'stroke' },
    { title: 'folder-open', url: '', id: 10250, category: 7, type: 'all' },
    { title: 'folder-plus', url: '', id: 10247, category: 7, type: 'all' },
    { title: 'folder-plus', url: '', id: 10253, category: 7, type: 'stroke' },
    { title: 'folder', url: '', id: 10254, category: 7, type: 'all' },
    { title: 'forward-5sec', url: '', id: 10044, category: 4, type: 'stroke' },
    { title: 'forward-10sec', url: '', id: 10042, category: 4, type: 'stroke' },
    { title: 'gift', url: '', id: 10092, category: 1, type: 'all' },
    { title: 'give-money-2', url: '', id: 10180, category: 3, type: 'all' },
    { title: 'give-money', url: '', id: 10181, category: 3, type: 'all' },
    { title: 'globus', url: '', id: 10138, category: 1, type: 'stroke' },
    { title: 'graphics-2', url: '', id: 10195, category: 3, type: 'all' },
    { title: 'graphics-3', url: '', id: 10194, category: 3, type: 'all' },
    { title: 'graphics-4', url: '', id: 10193, category: 3, type: 'all' },
    { title: 'graphics', url: '', id: 10196, category: 3, type: 'all' },
    { title: 'grid', url: '', id: 10152, category: 1, type: 'all' },
    { title: 'headphones', url: '', id: 10003, category: 4, type: 'all' },
    { title: 'heart', url: '', id: 10099, category: 1, type: 'all' },
    { title: 'highlight-2', url: '', id: 10140, category: 1, type: 'all' },
    { title: 'highlight', url: '', id: 10141, category: 1, type: 'all' },
    { title: 'home_1', url: '', id: 10088, category: 1, type: 'all' },
    { title: 'home_2', url: '', id: 10089, category: 1, type: 'all' },
    { title: 'home_3', url: '', id: 10087, category: 1, type: 'all' },
    { title: 'inbox', url: '', id: 10113, category: 1, type: 'all' },
    { title: 'key-door', url: '', id: 10147, category: 1, type: 'all' },
    { title: 'key', url: '', id: 10148, category: 1, type: 'all' },
    { title: 'keys', url: '', id: 10144, category: 1, type: 'stroke' },
    { title: 'layers', url: '', id: 10129, category: 1, type: 'all' },
    { title: 'lock-door', url: '', id: 10146, category: 1, type: 'all' },
    { title: 'lock-open', url: '', id: 10123, category: 1, type: 'all' },
    { title: 'lock', url: '', id: 10121, category: 1, type: 'all' },
    { title: 'loupe-minus', url: '', id: 10116, category: 1, type: 'all' },
    { title: 'loupe-plus', url: '', id: 10117, category: 1, type: 'all' },
    { title: 'mail', url: '', id: 10178, category: 1, type: 'all' },
    { title: 'map-pin', url: '', id: 10111, category: 1, type: 'all' },
    { title: 'mark', url: '', id: 10110, category: 1, type: 'all' },
    { title: 'maximize-2', url: '', id: 10153, category: 1, type: 'stroke' },
    { title: 'maximize-2', url: '', id: 10227, category: 5, type: 'stroke' },
    { title: 'maximize-3', url: '', id: 10225, category: 5, type: 'stroke' },
    { title: 'maximize', url: '', id: 10229, category: 5, type: 'stroke' },
    { title: 'media-2', url: '', id: 10004, category: 2, type: 'all' },
    { title: 'media-minus', url: '', id: 10005, category: 2, type: 'all' },
    { title: 'media-none', url: '', id: 10007, category: 2, type: 'all' },
    { title: 'media-off-2', url: '', id: 10006, category: 2, type: 'all' },
    { title: 'media-off', url: '', id: 10001, category: 2, type: 'all' },
    { title: 'media', url: '', id: 10002, category: 2, type: 'all' },
    { title: 'message-delete', url: '', id: 10050, category: 4, type: 'all' },
    { title: 'message-minus', url: '', id: 10049, category: 4, type: 'all' },
    { title: 'message-plus', url: '', id: 10053, category: 4, type: 'all' },
    { title: 'message', url: '', id: 10054, category: 4, type: 'all' },
    { title: 'micro-waves', url: '', id: 10163, category: 1, type: 'stroke' },
    { title: 'microphone-2', url: '', id: 10027, category: 4, type: 'all' },
    { title: 'microphone-2', url: '', id: 10036, category: 4, type: 'fill' },
    { title: 'microphone-3', url: '', id: 10035, category: 4, type: 'all' },
    { title: 'microphone-4', url: '', id: 10029, category: 4, type: 'all' },
    { title: 'microphone-5', url: '', id: 10026, category: 4, type: 'all' },
    { title: 'microphone-6', url: '', id: 10025, category: 4, type: 'all' },
    { title: 'microphone-7', url: '', id: 10024, category: 4, type: 'all' },
    { title: 'microphone-8', url: '', id: 10023, category: 4, type: 'all' },
    { title: 'microphone-9', url: '', id: 10022, category: 4, type: 'all' },
    { title: 'microphone-lock', url: '', id: 10031, category: 4, type: 'all' },
    { title: 'microphone-minus', url: '', id: 10030, category: 4, type: 'all' },
    { title: 'microphone-off', url: '', id: 10028, category: 4, type: 'all' },
    { title: 'microphone-plus', url: '', id: 10033, category: 4, type: 'all' },
    { title: 'microphone', url: '', id: 10034, category: 4, type: 'all' },
    { title: 'minimize-2', url: '', id: 10158, category: 1, type: 'stroke' },
    { title: 'minimize-2', url: '', id: 10226, category: 5, type: 'stroke' },
    { title: 'minimize-3', url: '', id: 10224, category: 5, type: 'stroke' },
    { title: 'minimize', url: '', id: 10228, category: 5, type: 'stroke' },
    { title: 'minus', url: '', id: 10170, category: 1, type: 'stroke' },
    { title: 'money-bag', url: '', id: 10186, category: 3, type: 'all' },
    { title: 'money-dollar', url: '', id: 10185, category: 3, type: 'all' },
    { title: 'money-euro', url: '', id: 10184, category: 3, type: 'all' },
    { title: 'moonlight', url: '', id: 10077, category: 6, type: 'all' },
    { title: 'more-horizontal', url: '', id: 10173, category: 1, type: 'stroke' },
    { title: 'more-vertical', url: '', id: 10169, category: 1, type: 'stroke' },
    { title: 'note-2', url: '', id: 10045, category: 4, type: 'all' },
    { title: 'note', url: '', id: 10046, category: 4, type: 'all' },
    { title: 'order', url: '', id: 10134, category: 1, type: 'all' },
    { title: 'out-link', url: '', id: 10076, category: 5, type: 'stroke' },
    { title: 'package', url: '', id: 10137, category: 1, type: 'all' },
    { title: 'phone', url: '', id: 10179, category: 1, type: 'all' },
    { title: 'photo-off', url: '', id: 10019, category: 4, type: 'all' },
    { title: 'photo-turn', url: '', id: 10020, category: 4, type: 'all' },
    { title: 'photo', url: '', id: 10021, category: 4, type: 'all' },
    { title: 'picture', url: '', id: 10037, category: 4, type: 'all' },
    { title: 'play', url: '', id: 10011, category: 4, type: 'all' },
    { title: 'player-back', url: '', id: 10014, category: 4, type: 'all' },
    { title: 'player-next', url: '', id: 10013, category: 4, type: 'all' },
    { title: 'plus', url: '', id: 10172, category: 1, type: 'stroke' },
    { title: 'pulse', url: '', id: 10161, category: 1, type: 'stroke' },
    { title: 'qr-code-2', url: '', id: 10150, category: 1, type: 'all' },
    { title: 'qr-code', url: '', id: 10151, category: 1, type: 'all' },
    { title: 'random-2', url: '', id: 10239, category: 5, type: 'stroke' },
    { title: 'random-3', url: '', id: 10238, category: 5, type: 'stroke' },
    { title: 'random-4', url: '', id: 10237, category: 5, type: 'stroke' },
    { title: 'random', url: '', id: 10240, category: 5, type: 'stroke' },
    { title: 'refresh-2', url: '', id: 10242, category: 5, type: 'stroke' },
    { title: 'refresh-3', url: '', id: 10232, category: 5, type: 'stroke' },
    { title: 'refresh-4', url: '', id: 10231, category: 5, type: 'stroke' },
    { title: 'refresh-5', url: '', id: 10236, category: 5, type: 'stroke' },
    { title: 'refresh-6', url: '', id: 10234, category: 5, type: 'stroke' },
    { title: 'refresh-7', url: '', id: 10235, category: 5, type: 'stroke' },
    { title: 'refresh-8', url: '', id: 10233, category: 5, type: 'stroke' },
    { title: 'refresh-9', url: '', id: 10243, category: 5, type: 'stroke' },
    { title: 'refresh-10', url: '', id: 10230, category: 5, type: 'stroke' },
    { title: 'refresh', url: '', id: 10241, category: 5, type: 'stroke' },
    { title: 'replay-2', url: '', id: 10047, category: 4, type: 'stroke' },
    { title: 'replay', url: '', id: 10048, category: 4, type: 'stroke' },
    { title: 'rgb', url: '', id: 10155, category: 1, type: 'stroke' },
    { title: 'save', url: '', id: 10128, category: 1, type: 'all' },
    { title: 'scale-horizontal', url: '', id: 10017, category: 4, type: 'all' },
    { title: 'scale-vertical', url: '', id: 10018, category: 4, type: 'all' },
    { title: 'scale', url: '', id: 10070, category: 5, type: 'stroke' },
    { title: 'screen', url: '', id: 10149, category: 1, type: 'all' },
    { title: 'search', url: '', id: 10115, category: 1, type: 'all' },
    { title: 'send', url: '', id: 10120, category: 1, type: 'all' },
    { title: 'setting', url: '', id: 10124, category: 1, type: 'all' },
    { title: 'share-2', url: '', id: 10073, category: 5, type: 'stroke' },
    { title: 'share', url: '', id: 10112, category: 1, type: 'all' },
    { title: 'slid/ers', url: '', id: 10100, category: 1, type: 'all' },
    { title: 'snowflake', url: '', id: 10157, category: 1, type: 'stroke' },
    { title: 'square-arrow-down', url: '', id: 10257, category: 5, type: 'stroke' },
    { title: 'square-arrow-left', url: '', id: 10255, category: 5, type: 'stroke' },
    { title: 'square-arrow-right', url: '', id: 10256, category: 5, type: 'stroke' },
    { title: 'square-arrow-up', url: '', id: 10258, category: 5, type: 'stroke' },
    { title: 'square-clock', url: '', id: 10094, category: 1, type: 'all' },
    { title: 'square-exclamation-mark', url: '', id: 10127, category: 1, type: 'all' },
    { title: 'square-question-mark', url: '', id: 10167, category: 1, type: 'all' },
    { title: 'star', url: '', id: 10090, category: 1, type: 'all' },
    { title: 'stop', url: '', id: 10012, category: 4, type: 'all' },
    { title: 'stop', url: '', id: 10052, category: 4, type: 'all' },
    { title: 'subtitles', url: '', id: 10057, category: 4, type: 'all' },
    { title: 'success-door', url: '', id: 10145, category: 1, type: 'stroke' },
    { title: 'sun', url: '', id: 10085, category: 6, type: 'all' },
    { title: 'tag', url: '', id: 10132, category: 1, type: 'all' },
    { title: 'tap', url: '', id: 10143, category: 1, type: 'all' },
    { title: 'text-align-center', url: '', id: 10177, category: 1, type: 'stroke' },
    { title: 'text-align-justified', url: '', id: 10174, category: 1, type: 'stroke' },
    { title: 'text-align-left', url: '', id: 10176, category: 1, type: 'stroke' },
    { title: 'text-align-right', url: '', id: 10175, category: 1, type: 'stroke' },
    { title: 'thumbs-down', url: '', id: 10101, category: 1, type: 'all' },
    { title: 'thumbs-up', url: '', id: 10102, category: 1, type: 'all' },
    { title: 'ticket', url: '', id: 10114, category: 1, type: 'all' },
    { title: 'trash', url: '', id: 10103, category: 1, type: 'all' },
    { title: 'triangle-exclamation-mark', url: '', id: 10125, category: 1, type: 'all' },
    { title: 'triangle-question-mark', url: '', id: 10165, category: 1, type: 'all' },
    { title: 'tv', url: '', id: 10056, category: 4, type: 'all' },
    { title: 'wallet-arrow-down', url: '', id: 10189, category: 3, type: 'all' },
    { title: 'wallet-arrow-up', url: '', id: 10190, category: 3, type: 'all' },
    { title: 'wallet-minus', url: '', id: 10191, category: 3, type: 'all' },
    { title: 'wallet-plus', url: '', id: 10192, category: 3, type: 'all' },
    { title: 'wallet', url: '', id: 10201, category: 3, type: 'all' },
    { title: 'waves', url: '', id: 10154, category: 1, type: 'stroke' },
    { title: 'wifi', url: '', id: 10162, category: 1, type: 'stroke' },
    { title: 'zip', url: '', id: 10091, category: 1, type: 'all' }
  ]
})

export const getters = {
  GET_ACTIVE_CATEGORY: state => state.activeCategory,
  GET_ICONS: state => state.icons,
  GET_CATEGORIES: state => state.categories,
  GET_ACTIVE_TYPE: state => state.activeType
}

export const mutations = {
  CHANGE_ACTIVE_TYPE (state) {
    state.activeType === 'stroke' ? state.activeType = 'fill' : state.activeType = 'stroke'
  }
}

export const actions = {

}