import {Query, Store, StoreConfig} from "@datorama/akita";

const countElement = document.querySelector("#count");

// 상태에 대한 인터페이스 정의
export interface SessionState {
    token: string;
    name: string;
}

// 초기화
export function createInitialState(): SessionState {
    return {
        token: "",
        name: "firstName",
    }
}

// 스토어 생성
@StoreConfig({name: "session"})
export class SessionStore extends Store<SessionState> {
    constructor() {
        super(createInitialState());
    }
}

/** 서비스: 업데이트 */
export class SessionService {
    // 의존성 주입
    constructor(private sessionStore: SessionStore) {}

    updateUserName(newName: string) {
        this.sessionStore.update({name: newName});
    }
}

/** 쿼리 */
export class SessionQuery extends Query<SessionState> {
    selectName = this.select("name");


    constructor(protected store: SessionStore) {
        super(store);
    }
}