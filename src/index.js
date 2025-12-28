// 模拟课程数据（实际应用中应从数据库获取）
const SAMPLE_LESSONS = [
    {
        id: 1,
        title: "Python基础语法",
        content: "# Python基础语法\n\nPython是一种高级编程语言，语法简洁易懂。",
        code_template: "print('Hello, World!')\nprint('欢迎学习Python')",
        lesson_type: "basic",
        order_num: 1
    },
    {
        id: 2,
        title: "变量和数据类型",
        content: "# 变量和数据类型\n\n在Python中，你可以创建不同类型的变量。",
        code_template: "# 创建不同类型的变量\nname = '张三'\nage = 25\nheight = 1.75\nis_student = True\n\nprint(f'姓名: {name}')\nprint(f'年龄: {age}')\nprint(f'身高: {height}')\nprint(f'是否学生: {is_student}')",
        lesson_type: "basic",
        order_num: 2
    },
    {
        id: 3,
        title: "条件语句",
        content: "# 条件语句\n\n条件语句用于根据不同条件执行不同代码块。",
        code_template: "# 条件语句示例\nage = 18\n\nif age >= 18:\n    print('你已经成年了')\nelse:\n    print('你还未成年')",
        lesson_type: "basic",
        order_num: 3
    },
    {
        id: 4,
        title: "循环语句",
        content: "# 循环语句\n\n循环语句用于重复执行代码块。",
        code_template: "# for循环示例\nfruits = ['苹果', '香蕉', '橙子']\n\nfor fruit in fruits:\n    print(f'我喜欢{fruit}')\n\n# while循环示例\ncount = 0\nwhile count < 5:\n    print(f'计数: {count}')\n    count += 1",
        lesson_type: "basic",
        order_num: 4
    },
    {
        id: 5,
        title: "函数定义",
        content: "# 函数定义\n\n函数是可重复使用的代码块，可以接收参数并返回值。",
        code_template: "# 定义函数\ndef greet(name):\n    return f'你好, {name}!'\n\n# 调用函数\nmessage = greet('小明')\nprint(message)\n\n# 带默认参数的函数\ndef introduce(name, age=18):\n    return f'我是{name}，今年{age}岁'\n\ninfo = introduce('小红', 20)\nprint(info)",
        lesson_type: "basic",
        order_num: 5
    },
    {
        id: 6,
        title: "列表操作",
        content: "# 列表操作\n\n列表是Python中最常用的数据结构之一。",
        code_template: "# 创建和操作列表\nnumbers = [1, 2, 3, 4, 5]\n\n# 添加元素\nnumbers.append(6)\nprint('添加元素后:', numbers)\n\n# 列表切片\nprint('前三个元素:', numbers[:3])\n\n# 列表推导式\nsquares = [x**2 for x in range(1, 6)]\nprint('平方数:', squares)",
        lesson_type: "basic",
        order_num: 6
    },
    {
        id: 7,
        title: "字典操作",
        content: "# 字典操作\n\n字典是键值对的集合，用于存储关联数据。",
        code_template: "# 创建和操作字典\nstudent = {\n    'name': '张三',\n    'age': 20,\n    'grade': 'A',\n    'courses': ['数学', '英语', '计算机']\n}\n\nprint(f'学生姓名: {student[\"name\"]}')\nprint(f'学生年龄: {student[\"age\"]}')\n\n# 添加新键值对\nstudent['email'] = 'zhangsan@example.com'\nprint('更新后的学生信息:', student)\n\n# 遍历字典\nfor key, value in student.items():\n    print(f'{key}: {value}')",
        lesson_type: "basic",
        order_num: 7
    },
    {
        id: 8,
        title: "文件操作",
        content: "# 文件操作\n\nPython可以轻松地读写文件。",
        code_template: "# 写入文件\nwith open('example.txt', 'w', encoding='utf-8') as f:\n    f.write('这是一个示例文件\\n')\n    f.write('包含中文内容')\n\n# 读取文件\nwith open('example.txt', 'r', encoding='utf-8') as f:\n    content = f.read()\n    print('文件内容:')\n    print(content)\n\n# 逐行读取\nwith open('example.txt', 'r', encoding='utf-8') as f:\n    for line in f:\n        print(f'行内容: {line.strip()}')",
        lesson_type: "basic",
        order_num: 8
    },
    {
        id: 9,
        title: "异常处理",
        content: "# 异常处理\n\n异常处理用于处理程序运行时可能出现的错误。",
        code_template: "# 基本异常处理\ntry:\n    number = int(input('请输入一个数字: '))\n    result = 10 / number\n    print(f'计算结果: {result}')\nexcept ValueError:\n    print('输入的不是有效数字')\nexcept ZeroDivisionError:\n    print('不能除以零')\nexcept Exception as e:\n    print(f'发生了未知错误: {e}')\nfinally:\n    print('计算完成')\n\n# 自定义异常\nclass CustomError(Exception):\n    pass\n\ntry:\n    raise CustomError('这是一个自定义异常')\nexcept CustomError as e:\n    print(f'捕获自定义异常: {e}')",
        lesson_type: "intermediate",
        order_num: 9
    },
    {
        id: 10,
        title: "面向对象编程基础",
        content: "# 面向对象编程基础\n\n面向对象编程是一种编程范式，使用类和对象来组织代码。",
        code_template: "# 定义类\nclass Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n        self.courses = []\n    \n    def add_course(self, course):\n        self.courses.append(course)\n    \n    def introduce(self):\n        return f'我是{self.name}，今年{self.age}岁，学习{len(self.courses)}门课程'\n\n# 创建对象\nstudent1 = Student('小明', 20)\nstudent1.add_course('数学')\nstudent1.add_course('英语')\n\nprint(student1.introduce())\n\n# 继承\nclass GraduateStudent(Student):\n    def __init__(self, name, age, research_area):\n        super().__init__(name, age)\n        self.research_area = research_area\n    \n    def introduce(self):\n        base_intro = super().introduce()\n        return f'{base_intro}，研究方向是{self.research_area}'\n\ngrad_student = GraduateStudent('小红', 24, '人工智能')\nprint(grad_student.introduce())",
        lesson_type: "intermediate",
        order_num: 10
    },
    {
        id: 11,
        title: "模块和包",
        content: "# 模块和包\n\n模块是包含Python代码的文件，包是包含多个模块的目录。",
        code_template: "# 创建模块示例\n# 假设有一个名为 mymath.py 的文件\n# 内容如下：\n\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\nPI = 3.14159\n\n# 在主程序中使用模块\n# import mymath\n\n# print(mymath.add(5, 3))\n# print(mymath.multiply(4, 7))\n# print(f'圆周率: {mymath.PI}')\n\n# 使用 from...import 语法\n# from mymath import add, PI\n\n# print(add(10, 20))\n# print(f'圆周率: {PI}')\n\n# 标准库模块示例\nimport random\nimport datetime\n\n# 随机数\nrandom_number = random.randint(1, 100)\nprint(f'随机数: {random_number}')\n\n# 当前时间\ncurrent_time = datetime.datetime.now()\nprint(f'当前时间: {current_time}')",
        lesson_type: "intermediate",
        order_num: 11
    },
    {
        id: 12,
        title: "正则表达式",
        content: "# 正则表达式\n\n正则表达式用于模式匹配和文本处理。",
        code_template: "import re\n\n# 基本匹配\ntext = '联系方式: 电话 138-1234-5678, 邮箱 example@email.com'\n\n# 查找电话号码\nphone_pattern = r'\\d{3}-\\d{4}-\\d{4}'\nphone_match = re.search(phone_pattern, text)\nif phone_match:\n    print(f'找到电话号码: {phone_match.group()}')\n\n# 查找邮箱\nemail_pattern = r'\\w+@\\w+\\.\\w+'\nemail_match = re.search(email_pattern, text)\nif email_match:\n    print(f'找到邮箱: {email_match.group()}')\n\n# 替换文本\nnew_text = re.sub(r'\\d{3}-\\d{4}-\\d{4}', '***-****-****', text)\nprint(f'脱敏后文本: {new_text}')\n\n# 分割字符串\nsentence = 'Python is great, Python is powerful, Python is versatile.'\nsentences = re.split(r', ', sentence)\nfor i, s in enumerate(sentences):\n    print(f'句子 {i+1}: {s}')",
        lesson_type: "intermediate",
        order_num: 12
    },
    {
        id: 13,
        title: "网络爬虫基础",
        content: "# 网络爬虫基础\n\n网络爬虫用于从网页中提取数据。",
        code_template: "# 注意：在Workers环境中无法直接进行网络请求\n# 这里仅提供概念示例\n\n# 通常的爬虫代码（在普通Python环境中）\n'''\nimport requests\nfrom bs4 import BeautifulSoup\n\n# 获取网页内容\nurl = 'https://example.com'\nresponse = requests.get(url)\n\nif response.status_code == 200:\n    # 解析HTML\n    soup = BeautifulSoup(response.text, 'html.parser')\n    \n    # 提取标题\n    title = soup.find('title').text\n    print(f'页面标题: {title}')\n    \n    # 提取所有链接\n    links = soup.find_all('a')\n    for link in links:\n        href = link.get('href')\n        text = link.text\n        print(f'链接: {href}, 文本: {text}')\nelse:\n    print(f'请求失败，状态码: {response.status_code}')\n'''",
        lesson_type: "advanced",
        order_num: 13
    },
    {
        id: 14,
        title: "数据处理与分析",
        content: "# 数据处理与分析\n\n使用pandas等库进行数据分析。",
        code_template: "# 注意：在Workers环境中无法使用pandas\n# 这里仅提供概念示例\n\n'''\nimport pandas as pd\nimport numpy as np\n\n# 创建示例数据\nstudents_data = {\n    '姓名': ['张三', '李四', '王五', '赵六'],\n    '数学': [85, 92, 78, 88],\n    '英语': [90, 85, 95, 82],\n    '计算机': [95, 88, 90, 94]\n}\n\n# 创建DataFrame\ndf = pd.DataFrame(students_data)\nprint('学生成绩表:')\nprint(df)\n\n# 计算平均分\ndf['平均分'] = df[['数学', '英语', '计算机']].mean(axis=1)\nprint('\\n添加平均分后的表格:')\nprint(df)\n\n# 筛选成绩\nhigh_performers = df[df['平均分'] > 90]\nprint('\\n高分学生:')\nprint(high_performers)\n'''",
        lesson_type: "advanced",
        order_num: 14
    },
    {
        id: 15,
        title: "Flask Web开发基础",
        content: "# Flask Web开发基础\n\nFlask是一个轻量级的Python Web框架。",
        code_template: "# 注意：在Workers环境中无法直接运行Flask\n# 这里仅提供概念示例\n\n'''\nfrom flask import Flask, render_template, request, jsonify\n\napp = Flask(__name__)\n\n@app.route('/')\ndef index():\n    return '<h1>欢迎来到Flask应用</h1>'\n\n@app.route('/api/data')\ndef get_data():\n    return jsonify({'message': '这是API返回的数据'})\n\n@app.route('/user/<name>')\ndef user_profile(name):\n    return f'<h1>用户 {name} 的个人资料</h1>'\n\n@app.route('/submit', methods=['POST'])\ndef submit():\n    data = request.json\n    return jsonify({'received': data})\n\nif __name__ == '__main__':\n    app.run(debug=True)\n'''",
        lesson_type: "advanced",
        order_num: 15
    },
    {
        id: 16,
        title: "数据库操作",
        content: "# 数据库操作\n\n使用SQLAlchemy进行数据库操作。",
        code_template: "# 注意：在Workers环境中需要使用D1数据库\n# 这里仅提供概念示例\n\n'''\nfrom sqlalchemy import create_engine, Column, Integer, String\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = 'users'\n    \n    id = Column(Integer, primary_key=True)\n    name = Column(String(50))\n    email = Column(String(100))\n\n# 创建数据库连接\nengine = create_engine('sqlite:///example.db')\nBase.metadata.create_all(engine)\n\n# 创建会话\nSession = sessionmaker(bind=engine)\nsession = Session()\n\n# 添加用户\nnew_user = User(name='张三', email='zhangsan@example.com')\nsession.add(new_user)\nsession.commit()\n\n# 查询用户\nusers = session.query(User).all()\nfor user in users:\n    print(f'用户: {user.name}, 邮箱: {user.email}')\n\nsession.close()\n'''",
        lesson_type: "advanced",
        order_num: 16
    },
    {
        id: 17,
        title: "异步编程",
        content: "# 异步编程\n\n使用async/await进行异步编程。",
        code_template: "import asyncio\nimport time\n\n# 定义异步函数\nasync def fetch_data(url, delay):\n    print(f'开始获取数据从 {url}')\n    await asyncio.sleep(delay)  # 模拟网络请求延迟\n    print(f'完成获取数据从 {url}')\n    return f'来自{url}的数据'\n\n# 使用异步函数\nasync def main():\n    print('开始异步任务')\n    \n    # 并发执行多个任务\n    tasks = [\n        fetch_data('网站A', 2),\n        fetch_data('网站B', 1),\n        fetch_data('网站C', 3)\n    ]\n    \n    results = await asyncio.gather(*tasks)\n    \n    for result in results:\n        print(result)\n    \n    print('所有任务完成')\n\n# 运行异步主函数\n# asyncio.run(main())\n\n# 同步版本对比\ndef sync_fetch_data(url, delay):\n    print(f'开始获取数据从 {url}')\n    time.sleep(delay)  # 模拟网络请求延迟\n    print(f'完成获取数据从 {url}')\n    return f'来自{url}的数据'\n\nprint('\\n同步版本执行:')\nstart_time = time.time()\nsync_fetch_data('网站A', 2)\nsync_fetch_data('网站B', 1)\nsync_fetch_data('网站C', 3)\nend_time = time.time()\nprint(f'同步执行耗时: {end_time - start_time:.2f}秒')",
        lesson_type: "advanced",
        order_num: 17
    },
    {
        id: 18,
        title: "测试驱动开发",
        content: "# 测试驱动开发\n\n使用unittest进行单元测试。",
        code_template: "import unittest\n\n# 被测试的函数\ndef add_numbers(a, b):\n    return a + b\n\ndef is_even(number):\n    return number % 2 == 0\n\nclass TestMathFunctions(unittest.TestCase):\n    \n    def test_add_numbers(self):\n        self.assertEqual(add_numbers(3, 5), 8)\n        self.assertEqual(add_numbers(-1, 1), 0)\n        self.assertEqual(add_numbers(0, 0), 0)\n    \n    def test_is_even(self):\n        self.assertTrue(is_even(4))\n        self.assertFalse(is_even(3))\n        self.assertTrue(is_even(0))\n        self.assertFalse(is_even(-1))\n\n# 运行测试\nif __name__ == '__main__':\n    unittest.main(verbosity=2)\n\n# 更高级的测试示例\nclass TestAdvancedFeatures(unittest.TestCase):\n    \n    def setUp(self):\n        # 在每个测试方法运行前执行\n        self.numbers = [1, 2, 3, 4, 5]\n    \n    def test_list_operations(self):\n        self.assertIn(3, self.numbers)\n        self.assertEqual(len(self.numbers), 5)\n        \n        # 测试异常\n        with self.assertRaises(ZeroDivisionError):\n            result = 1 / 0\n    \n    def tearDown(self):\n        # 在每个测试方法运行后执行\n        self.numbers = None",
        lesson_type: "advanced",
        order_num: 18
    },
    {
        id: 19,
        title: "设计模式",
        content: "# 设计模式\n\n常见的软件设计模式。",
        code_template: "# 单例模式\nclass Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n# 工厂模式\nclass Dog:\n    def speak(self):\n        return \"汪汪!\"\n\nclass Cat:\n    def speak(self):\n        return \"喵喵!\"\n\nclass AnimalFactory:\n    @staticmethod\n    def create_animal(animal_type):\n        if animal_type == \"dog\":\n            return Dog()\n        elif animal_type == \"cat\":\n            return Cat()\n        else:\n            raise ValueError(f\"不支持的动物类型: {animal_type}\")\n\n# 使用工厂模式\nfactory = AnimalFactory()\ndog = factory.create_animal(\"dog\")\ncat = factory.create_animal(\"cat\")\n\nprint(dog.speak())  # 输出: 汪汪!\nprint(cat.speak())  # 输出: 喵喵!\n\n# 观察者模式\nclass NewsAgency:\n    def __init__(self):\n        self._observers = []\n        self._news = None\n    \n    def attach(self, observer):\n        self._observers.append(observer)\n    \n    def detach(self, observer):\n        self._observers.remove(observer)\n    \n    def notify(self):\n        for observer in self._observers:\n            observer.update(self._news)\n    \n    def add_news(self, news):\n        self._news = news\n        self.notify()\n\nclass NewsChannel:\n    def __init__(self, name):\n        self.name = name\n    \n    def update(self, news):\n        print(f\"{self.name} 收到新闻: {news}\")\n\n# 使用观察者模式\nagency = NewsAgency()\nchannel1 = NewsChannel(\"新闻频道1\")\nchannel2 = NewsChannel(\"新闻频道2\")\n\nagency.attach(channel1)\nagency.attach(channel2)\n\nagency.add_news(\"今天天气很好!\")",
        lesson_type: "advanced",
        order_num: 19
    },
    {
        id: 20,
        title: "性能优化",
        content: "# 性能优化\n\nPython程序的性能优化技巧。",
        code_template: "# 性能优化技巧示例\n\nimport time\nimport functools\nfrom collections import defaultdict, Counter\n\n# 1. 使用内置函数和库\n# 低效方式\ndef sum_numbers_slow(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\n# 高效方式\ndef sum_numbers_fast(numbers):\n    return sum(numbers)\n\n# 2. 使用列表推导式\n# 低效方式\ndef get_squares_slow(numbers):\n    squares = []\n    for num in numbers:\n        if num % 2 == 0:\n            squares.append(num ** 2)\n    return squares\n\n# 高效方式\ndef get_squares_fast(numbers):\n    return [num ** 2 for num in numbers if num % 2 == 0]\n\n# 3. 使用生成器节省内存\ndef large_range_generator(n):\n    \"\"\"生成器版本，节省内存\"\"\"\n    for i in range(n):\n        yield i * i\n\n# 4. 使用缓存装饰器\ndef memoize(func):\n    cache = {}\n    @functools.wraps(func)\n    def wrapper(*args):\n        if args in cache:\n            return cache[args]\n        result = func(*args)\n        cache[args] = result\n        return result\n    return wrapper\n\n@memoize\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# 5. 使用合适的数据结构\n# 使用Counter计数\nwords = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']\ncounts = Counter(words)\nprint('单词计数:', counts)\n\n# 使用defaultdict避免键不存在的错误\nword_lengths = defaultdict(list)\nfor word in words:\n    word_lengths[len(word)].append(word)\nprint('按长度分组:', dict(word_lengths))\n\n# 性能对比\nnumbers = list(range(1000000))\n\n# 测试求和性能\nstart_time = time.time()\nslow_result = sum_numbers_slow(numbers)\nslow_time = time.time() - start_time\n\nstart_time = time.time()\nfast_result = sum_numbers_fast(numbers)\nfast_time = time.time() - start_time\n\nprint(f'低效求和耗时: {slow_time:.4f}秒')\nprint(f'高效求和耗时: {fast_time:.4f}秒')\nprint(f'性能提升: {slow_time/fast_time:.2f}倍')",
        lesson_type: "advanced",
        order_num: 20
    }
];

// 模拟用户数据
let users = new Map();
let userProgress = new Map();

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;

        // CORS 头部（允许前端访问）
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        // 处理预检请求
        if (method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        try {
            // 获取所有课程
            if (path === '/api/lessons' && method === 'GET') {
                return handleGetLessons(corsHeaders);
            }
            // 获取特定课程
            else if (path.startsWith('/api/lesson/') && method === 'GET') {
                const lessonId = path.split('/')[3];
                return handleGetLesson(lessonId, corsHeaders);
            }
            // 执行代码
            else if (path === '/api/execute' && method === 'POST') {
                return handleExecuteCode(request, corsHeaders);
            }
            // 用户登录
            else if (path === '/api/login' && method === 'POST') {
                return handleLogin(request, corsHeaders);
            }
            // 用户注册
            else if (path === '/api/register' && method === 'POST') {
                return handleRegister(request, corsHeaders);
            }
            // 404 错误
            else {
                return new Response('Not Found', { status: 404 });
            }
        } catch (err) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }
    }
};

// 获取课程列表
function handleGetLessons(corsHeaders) {
    return new Response(JSON.stringify(SAMPLE_LESSONS), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
}

// 获取特定课程
function handleGetLesson(lessonId, corsHeaders) {
    const lesson = SAMPLE_LESSONS.find(l => l.id.toString() === lessonId);
    if (lesson) {
        return new Response(JSON.stringify(lesson), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    } else {
        return new Response(JSON.stringify({ error: '课程未找到' }), {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}

// 执行代码（由于 Workers 限制，这里只是模拟）
async function handleExecuteCode(request, corsHeaders) {
    try {
        const { code } = await request.json();
        
        // 由于 Workers 环境限制，我们无法执行任意 Python 代码
        // 这里只是模拟执行结果
        const output = `模拟执行结果：\n${code}\n\n注意：由于安全限制，实际环境中需要其他服务来执行 Python 代码。`;
        
        return new Response(JSON.stringify({ output }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}

// 用户登录
async function handleLogin(request, corsHeaders) {
    try {
        const { username, password } = await request.json();
        
        // 检查用户是否存在
        if (users.has(username)) {
            const user = users.get(username);
            if (user.password === password) {
                return new Response(JSON.stringify({ 
                    success: true, 
                    user: { id: user.id, username: user.username } 
                }), {
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
            } else {
                return new Response(JSON.stringify({ 
                    success: false, 
                    message: '密码错误' 
                }), {
                    status: 401,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
            }
        } else {
            return new Response(JSON.stringify({ 
                success: false, 
                message: '用户不存在' 
            }), {
                status: 401,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}

// 用户注册
async function handleRegister(request, corsHeaders) {
    try {
        const { username, email, password } = await request.json();
        
        // 检查用户名是否已存在
        if (users.has(username)) {
            return new Response(JSON.stringify({ 
                success: false, 
                message: '用户名已存在' 
            }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }
        
        // 创建新用户
        const userId = Date.now(); // 使用时间戳作为简单ID
        users.set(username, {
            id: userId,
            username,
            email,
            password,
            createdAt: new Date().toISOString()
        });
        
        return new Response(JSON.stringify({ 
            success: true, 
            user: { id: userId, username } 
        }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}