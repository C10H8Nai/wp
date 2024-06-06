let key = "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";

async function groqChat(q) {
    const chatCompletion = await fetch("https://api.groq.com/openai/v1/chat/completions",
    {
        body: JSON.stringify({
            "messages": [
                {
                    "role": "user",
                    "content": q
                }
                ],
                "model": "llama3-70b-8192",
                "temperature": 1,
                "max_tokens": 1024,
                "top_p": 1,
                "stream": false,
                "stop": null
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    });

    const chatData = await chatCompletion.json()
    console.log(chatData.choices[0].message.content);
    return chatData.choices[0].message.content;
}


async function chat() {
    let q = document.getElementById('question');
    let a = document.getElementById('answer');
    q.innerText = '詢問llama3-70b中，請稍等幾秒鐘...';
    let answer = await groqChat(q.value);
    a.innerText = answer;
};

