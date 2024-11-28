# KAISAR NETWORK

Your compute, your currency
Transform your compute power into real earnings.

![banner](assets/image.png)

### KAISAR BETA CLI MODE

**Register** : [Kaisar Network](https://zero.kaisar.io/register?ref=AHcqPu181)

- Create your email
- Verify email
- Connect your wallet
- Done

## BOT FEATURE

- Automated Run Kaisar Node.
- Automated Register to get Access Token.
- Automated Create Extensions ID for New Accounts.
- Support Multy Accounts.
- Support Proxy.

## PREREQUISITE

- Git
- Node.js 20+

## INSTALLATION

1. Clone the repository:
   ```bash
   git clone https://github.com/Rambeboy/kaisar-network-bot.git && cd kaisar-network-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the emails:
   ```bash
   nano emails.txt
   ```
4. Configure the ID:
   ```bash
   nano id.txt
   ```
5. Configure the tokens:
   ```bash
   nano tokens.txt
   ```
6. Configure the proxy:
   ```bash
   nano proxy.txt
   ```
7. Register or Login to get Access Token:
   ```bash
   npm run register
   ```
8. Create Extension ID for new accounts:
   ```bash
   npm run setup
   ```
9. Run the bot:
   ```bash
   npm run start
   ```

## SETUP ACCOUNTS

**If you already have account you can create file manually**.
1. `tokens.txt`: Stores access_tokens each line 1 account.
2. `id.txt`: Stores Extension IDs each line 1 account.
3. `emails.txt`: Store email account 1 line 1 account.
4. `proxy.txt`: stores Proxy url format
   ```bash
   http://user:pass@ip:port
   ```
   each line 1 proxy.
**If you register using cli, file above auto filled, just fill `email.txt` with your email.**

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
