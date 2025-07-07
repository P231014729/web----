import json
import sys
from code_knowledge_agent import CodeKnowledgeAgent

def main():
    # 初始化代理
    agent = CodeKnowledgeAgent(base_path='.')
    
    # 读取配置
    with open('agent_config.json', 'r', encoding='utf-8') as f:
        config = json.load(f)
    
    # 获取文件路径
    if len(sys.argv) > 1:
        file_path = sys.argv[1]
    else:
        file_path = input("请输入要分析的代码文件路径：")
    
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as f:
        code = f.read()
    
    # 确定文件类型
    file_ext = file_path.split('.')[-1]
    file_type = None
    for type_, patterns in config['file_patterns'].items():
        if any(pattern.replace('.', '') == file_ext for pattern in patterns):
            file_type = type_
            break
    
    if file_type:
        # 提取知识点
        knowledge_points = agent.extract_knowledge_points(code, file_type)
        
        # 更新知识库
        agent.update_knowledge_base(knowledge_points, file_type.upper())
        
        # 记录每日学习
        agent.log_daily_learning(file_path, knowledge_points)
        
        print(f"已成功分析文件 {file_path} 并更新知识库")
    else:
        print(f"不支持的文件类型：{file_ext}")

if __name__ == "__main__":
    main()