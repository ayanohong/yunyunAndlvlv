import requests
import json
import time

API_KEY = "07c7474984e117aedaa15850006a48ca.84bpqk8KmPkLEDDa"  # API密钥已更新
API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

def chat_with_glm4(messages, stream=False):
    data = {
        "model": "glm-4",
        "messages": messages,
        "stream": stream
    }

    response = requests.post(API_URL, headers=headers, json=data)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None

def stream_chat_with_glm4(messages):
    data = {
        "model": "glm-4",
        "messages": messages,
        "stream": True
    }

    response = requests.post(API_URL, headers=headers, json=data, stream=True)
    
    if response.status_code == 200:
        for line in response.iter_lines():
            if line:
                yield json.loads(line.decode('utf-8').split('data: ')[1])
    else:
        print(f"Error: {response.status_code}")
        print(response.text)

def main():
    messages = [
        {"role": "system", "content": "你是一个乐于回答各种问题的小助手,你的任务是提供专业、准确、有洞察力的建议。"},
        {"role": "user", "content": "请介绍一下你自己。"}
    ]

    # 非流式输出
    print("非流式输出:")
    response = chat_with_glm4(messages)
    if response:
        print(response['choices'][0]['message']['content'])

    print("\n流式输出:")
    # 流式输出
    for chunk in stream_chat_with_glm4(messages):
        if 'choices' in chunk:
            content = chunk['choices'][0]['delta'].get('content', '')
            print(content, end='', flush=True)
        if chunk['choices'][0].get('finish_reason') == 'stop':
            print("\n\n流式输出完成")

if __name__ == "__main__":
    main()