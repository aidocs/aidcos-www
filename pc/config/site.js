module.exports = {
    //顶部导航
    topNav: [{
        pageType: "home",
        iconName: "home",
        name: "首页",
        url: "" //index.html
    }, {
        pageType: "docscenter",
        iconName: "docs",
        name: "文档中心",
        url: "/index.html"
    }, {
        pageType: "information",
        iconName: "info",
        name: "信息聚合",
        url: "/information.html"
    }, {
        pageType: "forum",
        iconName: "forum",
        name: "交流论坛",
        url: "" //https://forum.aidocs.cn/ 
    }, {
        pageType: "partner",
        iconName: "partner",
        name: "合作伙伴",
        url: "/partner.html"
    }],

    //底部导航
    footNav: [{

    }],

    //合作伙伴
    partnerArray: [{
        name: "清华大学",
        link: "http://www.tsinghua.edu.cn/",
        logo: "/public/images/Tsinghua_1790a86.png"
    }, {
        name: "每日答答",
        link: "https://1024dada.com/?channel=aidocs&hmsr=aidocs&hmpl=&hmcu=&hmkw=&hmci=",
        logo: "/public/images/1024dada.png"
    }],

    //文档列表
    docsArray: [{
        displayTitle: "TensorFlow（旧）",
        docsTitle: "TensorFlow中文文档",
        docsDesc: "TensorFlow™ 是一个采用数据流图（data flow graphs），用于数值计算的开源软件库。节点（Nodes）在图中表示数学操作，图中的线（edges）则表示在节点间相互联系的多维数据数组，即张量（tensor）。",
        docsLink: "http://www.tensorfly.cn/tfdoc/api_docs/index.html",
        docsIcon: "/public/images/TensorFlow.png",
        authorName: "Tensorfly",
        authorLink: "http://www.tensorfly.cn/"
    }, {
        displayTitle: "NumPy",
        docsTitle: "NumPy中文文档",
        docsDesc: "NumPy是Python中科学计算的基础软件包。它是一个提供多了维数组对象，多种派生对象（如：掩码数组、矩阵）以及用于快速操作数组的函数及API，它包括数学、逻辑、数组形状变换、排序、选择、I/O、离散傅立叶变换、基本线性代数、基本统计运算、随机模拟等等。",
        docsLink: "https://www.numpy.org.cn/",
        docsIcon: "/public/images/numpy.png",
        authorName: "NumPy中文",
        authorLink: "https://www.numpy.org.cn/"
    }, {
        displayTitle: "scikit-learn",
        docsTitle: "sklearn中文文档",
        docsDesc: "scikit-learn(简记sklearn)，是用python实现的机器学习算法库。sklearn可以实现数据预处理、分类、回归、降维、模型选择等常用的机器学习算法。sklearn是基于NumPy,SciPy, matplotlib的。",
        docsLink: "https://www.numpy.org.cn/",
        docsIcon: "/public/images/scikit-learn.png",
        authorName: "ApacheCN",
        authorLink: "http://www.apachecn.org/"
    }, {
        displayTitle: "Matplotlib",
        docsTitle: "matplotlib中文文档",
        docsDesc: "Matplotlib是一个Python2D绘图库，可以生成各种硬拷贝格式和跨平台交互式环境的出版物质量数据。Matplotlib可用于Python脚本，Python和IPython shell，Jupyter笔记本，Web应用程序服务器和四个图形用户界面工具包。",
        docsLink: "https://www.matplotlib.org.cn/",
        docsIcon: "/public/images/matplotlib.png",
        authorName: "Matplotlib中文",
        authorLink: "https://www.matplotlib.org.cn/"
    }, {
        displayTitle: "Keras",
        docsTitle: "keras中文文档",
        docsDesc: "Keras 是一个用 Python 编写的高级神经网络 API，它能够以 TensorFlow, CNTK, 或者 Theano 作为后端运行。Keras的开发重点是支持快速的实验。能够以最小的时延把你的想法转换为实验结果，是做好研究的关键。",
        docsLink: "https://keras.io/",
        docsIcon: "/public/images/keras.png",
        authorName: "Keras官方",
        authorLink: "https://keras.io/"
    }, {
        displayTitle: "PyTorch（旧）",
        docsTitle: "PyTorch中文文档",
        docsDesc: "PyTorch 是一个针对 deep learning (深度学习) , 并且使用 GPU 和 CPU 来优化的 tensor library (张量库) 。",
        docsLink: "http://pytorch.apachecn.org/cn/docs/0.3.0/",
        docsIcon: "/public/images/pytorch.png",
        authorName: "ApacheCN",
        authorLink: "http://www.apachecn.org/"
    }, {
        displayTitle: "Pandas（旧）",
        docsTitle: "Pandas中文文档",
        docsDesc: "pandas是一个提供快速，灵活和表达性数据结构的Python包，旨在使“关系”或“标记”数据变得简单直观。它旨在成为在Python中进行实用的真实世界数据分析的基本高级构建块。此外，它的更广泛的目标是成为最强大和最灵活的任何语言的开源数据分析/操作工具。它已经很好地朝着这个目标前进了。",
        docsLink: "https://www.pypandas.cn/",
        docsIcon: "/public/images/pandas.png",
        authorName: "pandas中文",
        authorLink: "https://www.pypandas.cn/"
    }, {
        displayTitle: "Julia语言",
        docsTitle: "Julia语言中文文档",
        docsDesc: "Julia 是一个面向科学计算的高性能动态高级程序设计语言。其语法与其他科学计算语言相似。在许多情况下拥有能与编译型语言相媲美的性能。Julia是个灵活的动态语言，适合科学和数值计算，性能可与传统静态类型语言媲美。",
        docsLink: "https://docs.julialangcn.org/",
        docsIcon: "/public/images/julia.png",
        authorName: "Julia中文网",
        authorLink: "https://www.julialangcn.org/"
    }, {
        displayTitle: "Mxnet",
        docsTitle: "mxnet中文文档",
        docsDesc: "Mxnet是一个灵活高效的深度学习库。",
        docsLink: "http://mxnet.incubator.apache.org/",
        docsIcon: "/public/images/mxnet.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "Theano",
        docsTitle: "theano中文文档",
        docsDesc: "Theano是一个Python库，它允许您高效地定义、优化和计算涉及多维数组的数学表达式。",
        docsLink: "http://deeplearning.net/software/theano/",
        docsIcon: "/public/images/theano.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "Caffe2",
        docsTitle: "Caffe2中文文档",
        docsDesc: "Caffe2是一个深度学习框架，它为您提供了一种简单而直接的方法来体验深度学习，并利用社区对新模型和算法的贡献。您可以使用云中的GPU的强大功能，或者在移动平台上使用Caffe2的跨平台库，将您的创意扩展到更大的规模。",
        docsLink: "https://caffe2.ai/docs/",
        docsIcon: "/public/images/caffe2.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "OpenCV",
        docsTitle: "OpenCV中文文档",
        docsDesc: "OpenCV是一个基于BSD许可（开源）发行的跨平台计算机视觉库，可以运行在Linux、Windows、Android和Mac OS操作系统上。它轻量级而且高效——由一系列C 函数和少量 C++ 类构成，同时提供了Python、Ruby、MATLAB等语言的接口，实现了图像处理和计算机视觉方面的很多通用算法。",
        docsLink: "https://www.cnblogs.com/Undo-self-blog/p/8423851.html",
        docsIcon: "/public/images/opencv.png",
        authorName: "段力辉",
        authorLink: "https://www.cnblogs.com/Undo-self-blog/p/8423851.html"
    }, {
        displayTitle: "openAI",
        docsTitle: "openAI中文文档",
        docsDesc: "这是OpenAI制作的教育资源，可以更容易地学习深层强化学习（深度RL）。",
        docsLink: "https://spinningup.openai.com/en/latest/user/introduction.html",
        docsIcon: "/public/images/openai.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "MinPy",
        docsTitle: "MinPy中文文档",
        docsDesc: "MinPy的目标是原型化MXNet后端之上的纯NumPy接口。",
        docsLink: "https://spinningup.openai.com/en/latest/user/introduction.html",
        docsIcon: "/public/images/minpy.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "Auto-sklearn",
        docsTitle: "auto-sklearn中文文档",
        docsDesc: "auto-sklearn是一个自动化的机器学习工具包，是scikit-learn工具的直接替代品。",
        docsLink: "https://automl.github.io/auto-sklearn/stable/",
        docsIcon: "/public/images/auto-sklearn.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "FastAi",
        docsTitle: "FastAi中文文档",
        docsDesc: "fastai库使用现代最佳实践简化了快速、准确的神经网络训练。它基于在fast.ai上进行的深入学习最佳实践的研究，包括对视觉、文本、表格和collab(协作过滤)模型的“开箱即用”支持。",
        docsLink: "https://docs.fast.ai/",
        docsIcon: "/public/images/fastai.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "Dopamine",
        docsTitle: "Dopamine中文文档",
        docsDesc: "dopamine是一种用于强化学习算法快速原型设计的研究框架。它旨在满足一个小型，易于理解的代码库的需求，用户可以自由地尝试疯狂的想法（推测性研究）。",
        docsLink: "https://github.com/google/dopamine/tree/master/docs",
        docsIcon: "/public/images/dopamine.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }, {
        displayTitle: "AdaNet",
        docsTitle: "AdaNet中文文档",
        docsDesc: "AdaNet是一个轻量级和可伸缩的TensorFlow AutoML框架，用于使用AdaNet算法训练和部署自适应神经网络。(见ICML 2017)。AdaNet将几个学习的子网络结合起来，以减轻设计有效的神经网络所固有的复杂性。",
        docsLink: "https://github.com/tensorflow/adanet",
        docsIcon: "/public/images/adanet.png",
        authorName: "Aidocs",
        authorLink: "https://www.aidocs.cn/"
    }]
}