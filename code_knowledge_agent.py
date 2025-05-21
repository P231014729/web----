import os
import re
from datetime import datetime

class CodeKnowledgeAgent:
    def __init__(self, base_path):
        self.base_path = base_path
        self.knowledge_file = os.path.join(base_path, 'knowledge-base.md')
        self.daily_log_file = os.path.join(base_path, 'daily-log.md')
        
        # 确保文件存在
        self._ensure_files_exist()
        
    def _ensure_files_exist(self):
        """确保必要的文件存在"""
        for file_path in [self.knowledge_file, self.daily_log_file]:
            if not os.path.exists(file_path):
                with open(file_path, 'w', encoding='utf-8') as f:
                    if file_path.endswith('knowledge-base.md'):
                        f.write("# 知识库\n\n")
                    else:
                        f.write("# 学习日志\n\n")

    def _extract_html_knowledge(self, code):
        """提取HTML相关知识点"""
        knowledge_points = []
        # 提取标签使用
        tags = re.findall(r'<(\w+)[^>]*>', code)
        if tags:
            knowledge_points.append(f"使用的HTML标签：{', '.join(set(tags))}")
        
        # 提取属性使用
        attrs = re.findall(r'(\w+)="[^"]*"', code)
        if attrs:
            knowledge_points.append(f"使用的属性：{', '.join(set(attrs))}")
            
        return knowledge_points

    def _extract_css_knowledge(self, code):
        """提取CSS相关知识点"""
        knowledge_points = []
        # 提取选择器
        selectors = re.findall(r'([.#]?\w+)\s*{', code)
        if selectors:
            knowledge_points.append(f"使用的选择器：{', '.join(set(selectors))}")
        
        # 提取属性
        properties = re.findall(r'(\w+-?\w+):', code)
        if properties:
            knowledge_points.append(f"使用的CSS属性：{', '.join(set(properties))}")
            
        return knowledge_points

    def _extract_js_knowledge(self, code):
        """提取JavaScript相关知识点"""
        knowledge_points = []
        # 提取函数定义
        functions = re.findall(r'function\s+(\w+)', code)
        if functions:
            knowledge_points.append(f"定义的函数：{', '.join(functions)}")
        
        # 提取类定义
        classes = re.findall(r'class\s+(\w+)', code)
        if classes:
            knowledge_points.append(f"定义的类：{', '.join(classes)}")
            
        return knowledge_points        
    def extract_knowledge_points(self, code, file_type):
        """提取代码中的知识点"""
        knowledge_points = []
        
        if file_type == 'html':
            knowledge_points.extend(self._extract_html_knowledge(code))
        elif file_type == 'css':
            knowledge_points.extend(self._extract_css_knowledge(code))
        elif file_type == 'js':
            knowledge_points.extend(self._extract_js_knowledge(code))
            
        return knowledge_points
        
    def update_knowledge_base(self, knowledge_points, category):
        """更新知识库文件"""
        with open(self.knowledge_file, 'a', encoding='utf-8') as f:
            f.write(f"\n## {category}\n")
            for point in knowledge_points:
                f.write(f"- {point}\n")
                
    def log_daily_learning(self, file_name, knowledge_points):
        """记录每日学习内容"""
        today = datetime.now().strftime('%Y-%m-%d')
        with open(self.daily_log_file, 'a', encoding='utf-8') as f:
            f.write(f"\n## {today}\n")
            f.write(f"### 学习文件：{file_name}\n")
            f.write("### 知识点：\n")
            for point in knowledge_points:
                f.write(f"- {point}\n")
