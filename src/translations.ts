const translations = {
  en: {
    nav: {
      brand: "Moxin Apps",
      apps: "Applications",
      tech: "Technology",
    },
    hero: {
      title: "Moxin Applications",
      tagline: "AI Crafted in Pure Rust",
      subtitle: "Native Desktop Intelligence — No Python Required",
      scroll: "Scroll",
    },
    philosophy: {
      label: "Philosophy",
      title: "The Way of the Artisan",
      subtitle:
        "Like the ancient seal carvers who shaped meaning into stone with precision and intent, we craft AI tools with the same deliberate mastery.",
      pillars: [
        {
          title: "Pure Rust",
          description:
            "Every line of code, from UI to inference, written in Rust. No Python runtime, no garbage collection pauses, no compromise.",
        },
        {
          title: "Metal Accelerated",
          description:
            "Direct GPU access through Apple Metal. Models run at native speed on Apple Silicon, with zero abstraction overhead.",
        },
        {
          title: "Locally Native",
          description:
            "Your data never leaves your machine. Full AI capabilities running natively on your desktop, private by design.",
        },
      ],
    },
    apps: {
      label: "Applications",
      title: "Tools of the Craft",
      subtitle:
        "Native AI applications built with the Moxin stack — each one a testament to what's possible when performance meets purpose.",
      viewOnGithub: "View on GitHub",
      hintOverview: "▶ Overview playing — click a feature to explore",
      hintFeature: "Click the title to replay the overview",
      studio: {
        name: "Moxin Studio",
        tagline: "Your Complete Local AI Workbench",
        seal: "坊",
        description:
          "A native desktop application that runs LLMs, generates images, clones voices, and transcribes speech — all locally on Apple Silicon. No cloud, no Python, no waiting.",
        functions: [
          { seal: "话", label: "Multi-Model Chat", desc: "Qwen3, GLM-4, Mistral & Mixtral — reasoning included, fully local." },
          { seal: "视", label: "Vision Models", desc: "Understand images with Qwen3-VL and Moxin-7B." },
          { seal: "绘", label: "Image Generation", desc: "FLUX.2-klein, Z-Image-Turbo and Qwen-Image, on device." },
          { seal: "声", label: "Voice I/O", desc: "Speech-to-text and text-to-speech with voice cloning." },
          { seal: "库", label: "Model Hub", desc: "Discover, download and run models from the app." },
          { seal: "联", label: "MCP Tools", desc: "Model Context Protocol for external tool use." },
        ],
      },
      voice: {
        name: "Moxin Voice",
        tagline: "Real-Time Translation & Voice Synthesis",
        seal: "声",
        description:
          "Live translation with real-time bilingual subtitles at its core. Clone any voice from seconds of audio and generate natural speech across Chinese, English, Japanese, and Korean.",
        functions: [
          { seal: "仿", label: "Zero-Shot Cloning", desc: "Clone any voice with 5–30 seconds of audio." },
          { seal: "音", label: "Text to Speech", desc: "9 preset voices across Chinese, English, Japanese and Korean." },
          { seal: "译", label: "Live Translation", desc: "Real-time subtitles from microphone or system audio." },
          { seal: "录", label: "Audio Recording", desc: "Real-time recording with waveform visualization." },
          { seal: "听", label: "ASR Transcription", desc: "Automatic transcription for cloning reference audio." },
          { seal: "存", label: "WAV Export", desc: "Save generated speech as high-quality WAV files." },
        ],
      },
    },
    tech: {
      label: "Technology",
      title: "Forged in Rust",
      subtitle:
        "A vertically integrated stack from metal to pixel. Every component chosen for performance, every abstraction earned.",
      stack: [
        { name: "Rust", description: "Systems language powering every layer", detail: "Memory safety without garbage collection" },
        { name: "Makepad", description: "GPU-accelerated native UI framework", detail: "Pure Rust, cross-platform rendering" },
        { name: "OminiX MLX", description: "Apple Silicon inference engine", detail: "Metal GPU acceleration for ML models" },
        { name: "Dora", description: "Dataflow orchestration framework", detail: "Connecting AI pipelines seamlessly" },
      ],
      layers: [
        { label: "Applications" },
        { label: "UI Framework" },
        { label: "Inference" },
        { label: "Runtime" },
      ],
    },
    cta: {
      title: "Open Source",
      description:
        "Every application in the Moxin ecosystem is open source under Apache 2.0. Inspect the code, contribute improvements, or build your own tools on our stack.",
      github: "Explore on GitHub",
      discord: "Join Discord",
    },
    footer: {
      tagline: "Apache 2.0 — AI crafted in pure Rust",
    },
  },
  zh: {
    nav: {
      brand: "Moxin 应用",
      apps: "应用",
      tech: "技术",
    },
    hero: {
      title: "Moxin 应用",
      tagline: "纯 Rust 打造的 AI",
      subtitle: "原生桌面智能 — 无需 Python",
      scroll: "向下滚动",
    },
    philosophy: {
      label: "理念",
      title: "匠人之道",
      subtitle:
        "如同古代篆刻大师以精准与匠心将含义刻入石中，我们以同样的专注与精湛技艺打造 AI 工具。",
      pillars: [
        {
          title: "纯 Rust",
          description:
            "从 UI 到推理引擎，每一行代码均由 Rust 编写。无 Python 运行时，无垃圾回收停顿，绝不妥协。",
        },
        {
          title: "Metal 加速",
          description:
            "通过 Apple Metal 直接访问 GPU。模型在 Apple Silicon 上以原生速度运行，零抽象层开销。",
        },
        {
          title: "本地原生",
          description:
            "数据从不离开您的设备。完整的 AI 能力在桌面端原生运行，从设计之初即保护隐私。",
        },
      ],
    },
    apps: {
      label: "应用",
      title: "匠心之器",
      subtitle:
        "基于 Moxin 技术栈构建的原生 AI 应用 — 每一款都是性能与目标完美结合的典范。",
      viewOnGithub: "在 GitHub 上查看",
      hintOverview: "▶ 正在播放概览 — 点击任一功能查看详情",
      hintFeature: "点击标题可重新播放概览",
      studio: {
        name: "Moxin Studio",
        tagline: "本地 AI 全能工作台",
        seal: "坊",
        description:
          "原生桌面应用，可在 Apple Silicon 上本地运行大语言模型、生成图像、克隆语音和语音转文字。无需云端、无需 Python、即开即用。",
        functions: [
          { seal: "话", label: "多模型对话", desc: "Qwen3、GLM-4、Mistral、Mixtral，支持推理，全程本地。" },
          { seal: "视", label: "视觉模型", desc: "用 Qwen3-VL、Moxin-7B 理解图像内容。" },
          { seal: "绘", label: "图像生成", desc: "本地运行 FLUX.2-klein、Z-Image-Turbo、Qwen-Image。" },
          { seal: "声", label: "语音 I/O", desc: "语音转文字、文字转语音，支持声音克隆。" },
          { seal: "库", label: "模型中心", desc: "在应用内发现、下载并运行模型。" },
          { seal: "联", label: "MCP 工具", desc: "通过模型上下文协议接入外部工具。" },
        ],
      },
      voice: {
        name: "Moxin Voice",
        tagline: "实时翻译与语音合成",
        seal: "声",
        description:
          "以实时翻译、双语字幕为核心。仅需数秒音频即可克隆任意声音，支持中、英、日、韩四语自然语音生成。",
        functions: [
          { seal: "仿", label: "零样本克隆", desc: "仅需 5–30 秒音频即可克隆任意声音。" },
          { seal: "音", label: "文字转语音", desc: "9 种预设语音，覆盖中、英、日、韩四语。" },
          { seal: "译", label: "实时翻译", desc: "对麦克风或系统音频实时生成双语字幕。" },
          { seal: "录", label: "实时录音", desc: "内置实时录音，带波形可视化。" },
          { seal: "听", label: "ASR 转写", desc: "自动转写克隆所需的参考音频。" },
          { seal: "存", label: "WAV 导出", desc: "将生成的语音保存为高品质 WAV 文件。" },
        ],
      },
    },
    tech: {
      label: "技术",
      title: "Rust 铸造",
      subtitle:
        "从底层到界面的垂直整合技术栈。每个组件为性能而选，每层抽象皆有所值。",
      stack: [
        { name: "Rust", description: "驱动每一层的系统级语言", detail: "无垃圾回收的内存安全" },
        { name: "Makepad", description: "GPU 加速原生 UI 框架", detail: "纯 Rust，跨平台渲染" },
        { name: "OminiX MLX", description: "Apple Silicon 推理引擎", detail: "Metal GPU 加速 ML 模型" },
        { name: "Dora", description: "数据流编排框架", detail: "无缝连接 AI 流水线" },
      ],
      layers: [
        { label: "应用层" },
        { label: "UI 框架" },
        { label: "推理引擎" },
        { label: "运行时" },
      ],
    },
    cta: {
      title: "开源",
      description:
        "Moxin 生态系统中的每一款应用均以 Apache 2.0 许可证开源。审查代码、贡献改进，或基于我们的技术栈构建您自己的工具。",
      github: "在 GitHub 上探索",
      discord: "加入 Discord",
    },
    footer: {
      tagline: "Apache 2.0 — 纯 Rust 打造的 AI",
    },
  },
};

interface AppFunction {
  seal: string;
  label: string;
  desc: string;
}

interface TechItem {
  name: string;
  description: string;
  detail: string;
}

export interface Translations {
  nav: { brand: string; apps: string; tech: string };
  hero: { title: string; tagline: string; subtitle: string; scroll: string };
  philosophy: {
    label: string;
    title: string;
    subtitle: string;
    pillars: { title: string; description: string }[];
  };
  apps: {
    label: string;
    title: string;
    subtitle: string;
    viewOnGithub: string;
    hintOverview: string;
    hintFeature: string;
    studio: {
      name: string;
      tagline: string;
      seal: string;
      description: string;
      functions: AppFunction[];
    };
    voice: {
      name: string;
      tagline: string;
      seal: string;
      description: string;
      functions: AppFunction[];
    };
  };
  tech: {
    label: string;
    title: string;
    subtitle: string;
    stack: TechItem[];
    layers: { label: string }[];
  };
  cta: { title: string; description: string; github: string; discord: string };
  footer: { tagline: string };
}

export type Lang = "en" | "zh";
export default translations as Record<Lang, Translations>;
