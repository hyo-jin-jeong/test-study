class StubProductClient {
    async fetchItems() {
        return [
            { item: 'Milk', available: true },
            { item: 'BANANA', available: false }
        ];
    }
}

module.exports = StubProductClient;
// mock은 아니고 실제 구현 클래스&함수이지만,
// 네트워크 사용 없이 구현됨