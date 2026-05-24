import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 50,        // 50 virtual users
    duration: '30s' // run for 30 seconds
};

export default function () {

    const payload = JSON.stringify({
        email: "rajeshthati535@gmail.com",
        password: "test@123"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(
        'http://localhost:3000/api/auth/login',
        payload,
        params
    );

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    console.log(`Status: ${res.status}`);

    sleep(1);
}