class ChatUI {
    constructor(list, username) {
        this.list = list;
        this.username = username;
    }
    clear() {
        this.list.innerHTML = '';
    }
    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(), {
                addSuffix: true
            }
        )
        if (this.username === data.username) {
            const html = `
            <li class="list-group-item" style="text-align: right">
                <span class="username">${data.username}</span>
                <br/>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
            `;
            this.list.innerHTML += html;
        } else {
            const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <br/>
                <span class="message">${data.message}</span>
                <div class="time">${when}</div>
            </li>
            `;
            this.list.innerHTML += html;
        }
    }
}