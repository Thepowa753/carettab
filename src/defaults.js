export class Defaults {
  global = {
    schema: '2.0',
    lang: 'enUS',
    hideSettings: false,
    disableSelection: false,
    wallpaper: {
      background: [220, 15, 15, 1],
      type: 'none',
      id: '',
      timestamp: '',
      size: 'cover',
      filter: 'normal',
      brightness: 10,
      saturation: 10,
      contrast: 10,
      blur: 0,
      scale: 100,
    },
    unsplash: {
      photoTitle: '',
      photoLink: '',
      photoAlt: '',
      authorName: '',
      authorLink: '',
      listName: '',
      listLink: '',
    },
    tabTitle: {
      type: 'newtab',
      custom: 'New Tab',
      datetime: 'ff',
    },
    font: {
      color: [220, 15, 85, 1],
      shadow: [true, 1, 1, 5, 0, 0, 0, 0.8],
      family: 'Source Sans Pro',
      size: 20,
      bold: 400,
      italic: false,
      underline: false,
      transform: 'none',
      letterSpacing: 0,
    },
    container: {
      background: [0, 0, 10, 0],
      shadow: [false, 1, 1, 5, 0, 0, 0, 0.8],
      borderColor: [0, 0, 100, 1],
      borderSize: 0,
      radius: 0,
      padding: 0,
    },
    element: {
      primaryColor: [220, 15, 85, 1],
      secondaryColor: [220, 15, 85, 1],
      tertiaryColor: [220, 15, 85, 1],
      shadow: [true, 1, 1, 5, 0, 0, 0, 0.8],
    },
  }
  toolbar = {
    on: false,
    background: [0, 0, 10, 0],
    foreground: [220, 15, 85, 1],
    shadow: [true, 1, 1, 5, 0, 0, 0, 0.8],
    borderColor: [0, 0, 100, 1],
    borderSize: 2,
    size: 64,
    align: 'flex-start',
    tools: [
      {
        id: 'aiChat',
        on: true,
        apiKey: '',
        model: 'gpt-3.5-turbo',
      },
    ],
  }
  layers = []
}
