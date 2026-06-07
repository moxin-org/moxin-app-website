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
      studio: {
        name: "Moxin Studio",
        tagline: "Your Complete Local AI Workbench",
        description:
          "A native desktop application that runs LLMs, generates images, clones voices, and transcribes speech — all locally on Apple Silicon. No cloud, no Python, no waiting.",
        features: [
          { title: "Voice I/O", detail: "Speech-to-text, TTS & voice cloning" },
          { title: "Image Generation", detail: "FLUX, Z-Image-Turbo, Qwen-Image" },
          { title: "Model Hub", detail: "20+ models, one-click download" },
          { title: "MCP Integration", detail: "Model Context Protocol for tool use" },
          { title: "Multi-Model Chat", detail: "Qwen3, GLM-4, Mistral, DeepSeek" },
          { title: "Video Generation", detail: "Wan2.2 5B for local video synthesis" },
        ],
        screenshots: [
          { label: "Model Management", desc: "On-device models, one-click load" },
          { label: "Multi-Model Chat", desc: "Local LLM conversation with reasoning" },
          { label: "Model Hub", desc: "Browse, download & run locally" },
          { label: "Provider Settings", desc: "Connect OpenAI, Anthropic & more" },
        ],
      },
      voice: {
        name: "Moxin Voice",
        tagline: "GPU-Accelerated Speech Synthesis",
        description:
          "Clone any voice from just 5 seconds of audio. Generate natural speech in Chinese, English, Japanese, and Korean. Live translation with real-time bilingual subtitles.",
        features: [
          { title: "Zero-Shot Cloning", detail: "Clone voices from 5–30s of audio" },
          { title: "Multilingual TTS", detail: "9 preset voices across 4 languages" },
          { title: "Live Translation", detail: "Real-time bilingual subtitles" },
          { title: "Waveform Visualization", detail: "Real-time audio visualization" },
          { title: "Audio Export", detail: "High-quality WAV export" },
          { title: "Native Dark Mode", detail: "GPU-rendered bilingual UI" },
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
      studio: {
        name: "Moxin Studio",
        tagline: "本地 AI 全能工作台",
        description:
          "原生桌面应用，可在 Apple Silicon 上本地运行大语言模型、生成图像、克隆语音和语音转文字。无需云端、无需 Python、即开即用。",
        features: [
          { title: "语音 I/O", detail: "语音转文字、文字转语音和语音克隆" },
          { title: "图像生成", detail: "FLUX、Z-Image-Turbo、Qwen-Image" },
          { title: "模型中心", detail: "20+ 模型，一键下载" },
          { title: "MCP 集成", detail: "模型上下文协议，扩展工具能力" },
          { title: "多模型对话", detail: "Qwen3、GLM-4、Mistral、DeepSeek" },
          { title: "视频生成", detail: "Wan2.2 5B 本地视频合成" },
        ],
        screenshots: [
          { label: "模型管理", desc: "设备端模型，一键加载" },
          { label: "多模型对话", desc: "本地大语言模型对话与推理" },
          { label: "模型中心", desc: "浏览、下载，本地运行" },
          { label: "提供商设置", desc: "接入 OpenAI、Anthropic 等服务" },
        ],
      },
      voice: {
        name: "Moxin Voice",
        tagline: "GPU 加速语音合成",
        description:
          "仅需 5 秒音频即可克隆任何声音。支持中、英、日、韩四语自然语音生成。实时翻译配双语字幕。",
        features: [
          { title: "零样本克隆", detail: "5–30 秒参考音频即可克隆" },
          { title: "多语言 TTS", detail: "9 种预设语音，4 种语言" },
          { title: "实时翻译", detail: "实时双语字幕" },
          { title: "波形可视化", detail: "实时音频波形显示" },
          { title: "音频导出", detail: "高品质 WAV 导出" },
          { title: "原生暗色模式", detail: "GPU 渲染双语界面" },
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

interface Feature {
  title: string;
  detail: string;
}

interface Screenshot {
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
    studio: {
      name: string;
      tagline: string;
      description: string;
      features: Feature[];
      screenshots: Screenshot[];
    };
    voice: {
      name: string;
      tagline: string;
      description: string;
      features: Feature[];
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
