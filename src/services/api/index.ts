import axios, { AxiosPromise } from 'axios';

class RequestMethods {
    private baseUrl = 'https://www.cbr-xml-daily.ru/';

    private requestFormat = 'daily_json.js';

    private archive = 'archive/';

    public getPreviousData = ({ day, month, year }: {[key: string]: string}): AxiosPromise => {
        const url = `${this.baseUrl}${this.archive}${year}/${month}/${day}/${this.requestFormat}`;

        return this.getCurrencies(url);
    };

    getCurrencies = (url = this.baseUrl + this.requestFormat): AxiosPromise => {
        const fetchData = () => axios({
            method: 'GET',
            url,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Request timeout'));
            }, 5000);

            fetchData()
                .then((res: any) => {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    resolve(res);
                }).catch(reject);
        });
    }
}

export const requests = new RequestMethods();
