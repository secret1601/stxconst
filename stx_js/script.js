window.onload = function() {

    // 모달창
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    

    modal_close.click(function(){
        modal.fadeOut();
    });

    // gnb 기능
    // 1. gnb를 저장한다.
    const gnb = $('.gnb');

    // 2. header를 저장한다.
    let header = $('.header');
    
    // 3. gnb에 마우스 hover를 하면 submenu를 늘어난다.
    gnb.mouseenter(function(){
        header.addClass('header-active');
    });
    // 4. gnb에 마우스 아웃을 하면 submenu를 줄어든다.
    gnb.mouseleave(function(){
        header.removeClass('header-active');
    });

    
    /*
    // 메뉴 작성 코드
    // 1. 메뉴를 위한 사용자 객체 생성자 함수
    function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink){
        this.mainmenu = _mainmenu;
        this.mainlink = _mainlink;
        this.subemenu = _submenu;
        this.sublink = _sublink;
    }

    let menu_data = [

    new MakeMenu('회사소개', 'http://secret1601.dothome.co.kr/', '인사말,STX건설,기업문화,STX건설연혁,조직안내,윤리경영,안전·환경·품질경영,찾아오시는 길', '#,#,#,#,#,#,#,#'),
    new MakeMenu('사업분야', '#', '건축사업,주택사업,토목사업,플랜트/공작기계사업,해외사업', '#,#,#,#,#'),
    new MakeMenu('사회공헌', '#', '나눔의생각,주요활동분야,활동현황', '#,#,#'),
    new MakeMenu('홍보센터', '#', '홍보동영상,홍보브로슈어,STX건설뉴스', '#,#,#'),
    new MakeMenu('고객지원', 'http://secret1601.dothome.co.kr/bbs/board.php?bo_table=test#', '자주묻는질문, 고객문의', '#,#'),
    new MakeMenu('채용정보', '#', '채용안내, 채용공고, 채용FAQ', '#,#,#')

    ];

    console.log(menu_data);

    // 2. 메뉴의 개수를 저장한다.
    let menu_total = menu_data.length;

    // 3. li를 만들어야 한다.
    let menu_li = '';

    for(let i = 0; i<menu_total; i++){
        menu_li = menu_li + '<li></li>'
    }
    
    gnb.html(menu_li);

    // 4. .gnb > li 를 찾아서 저장한다.
    let menu_lis = gnb.find('>li');
    // console.log(menu_lis);

    //  5. 주메뉴를 출력하자.
    $.each(menu_lis, function(index, item){
        // console.log(index);
        // console.log(item);
        let temp = menu_data[index];

        let cate = '<a href=#>';
        cate += '<a href=';
        cate += temp.mainlink;
        cate += '>';
        cate += temp.mainmenu;
        cate += '</a>';

        cate += '<ul class=submenu>';
        //  submenu의 li를 만든다.
        // submenu 글자에서 쉼표(,)를 기준으로 분리한다.
        let temp_sub = (temp.subemenu).split(',');
        // console.log(temp_sub);

        // 서브메뉴 링크들을 쉼표(,)를 기준으로 분리한다.
        let temp_sub_link = (temp.sublink).split(',');

        // 최종 li문구를 저장한다.
        let temp_sub_lis = '';
        
        for(let i = 0; i < temp_sub.length; i++) {
            temp_sub_lis += '<li>';

            temp_sub_lis += '<a href=';
            temp_sub_lis += temp_sub_link[i];
            temp_sub_lis += '>';

            temp_sub_lis += temp_sub[i] ;
            temp_sub_lis += '</a>';
            temp_sub_lis += '</li>';
        }
        cate += temp_sub_lis;
        cate += '</ul>';
        $(this).html(cate);
    });

    */

    


}