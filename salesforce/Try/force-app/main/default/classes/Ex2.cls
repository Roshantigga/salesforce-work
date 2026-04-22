public with sharing class Ex2 {
    public static void acc() {
        list<account> acc = new list<account>();
        try{
            for(integer i=0;i<5;i++){
                account newA = new Account();
                newA.name = 'Roshan'+i+'M';
                newA.phone = '898989898'+i;
                newA.Site='RoshanTigga.com';
                acc.add(newA);
            }
            if(!acc.isEmpty()){
                insert acc;
            }

        } catch(Exception e){
            system.debug('Something went wrong here');
        }
    }

}