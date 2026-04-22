public with sharing class Ex1 {

    public static void createContacts(List<Account> accList) {

        List<Contact> conList = new List<Contact>();

        try {
            for (Account acc : accList) {

                if (acc.Industry == 'Banking') {
                    Contact c = new Contact();
                    c.LastName = acc.Name;
                    c.Phone = acc.Phone;
                    c.AccountId = acc.Id; 
                    conList.add(c);
                }
            }


            if (!conList.isEmpty()) {
                insert conList;
            }

        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
        }
    }
}