# 1. Node.js 공식 이미지를 기반으로 사용
FROM node:16

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. package.json과 package-lock.json 파일을 복사하여 의존성 설치
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 애플리케이션 소스 파일을 모두 복사
COPY . .

EXPOSE 3000

# 6. 애플리케이션 시작
CMD ["npm", "start"]
