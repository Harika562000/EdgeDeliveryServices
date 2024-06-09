export default async function decorate(block) {
    const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=gX5_OFDKSnuhIu9MTn0wwkugRJCNofEmLk35SijgBxVNtHwAmu09gIQr9dIPUP3VE9cm4UI60p5wjRgVilUYayJpMCw0hl6hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAbEzYLMLud5nSRrFRaMFBRrbzUkYBJUJob3SN_txq1t1a9ynyaktzoVfps1goN-c-lbkziUDa_ZuTTozSdKo1PYZqj6otmFwdz9Jw9Md8uu&lib=MdzurH6rP-Fb5Enpdr9yxjvkixuCpAiP7');
    const data = await response.json();

    const container = document.querySelector('.custom-block > div > div');
    const itemList = document.createElement('ul');
    data.data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${item.Name}, Age: ${item.Age}, Email: ${item.Email}`;
        itemList.appendChild(listItem);
    });
    container.appendChild(itemList);
}