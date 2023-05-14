import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ProfileServiceService } from 'src/app/service/profile-service.service';
import { of } from 'rxjs';
import { ISkills } from 'src/app/interface/ISkills';
import { IEducation } from 'src/app/interface/IEducation';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let estadosUIServiceStub: Partial<EstadosUIService>;
  let profileServiceStub: Partial<ProfileServiceService>;

  // Mock data
  const education: IEducation = {
    id: 1,
    campus: 'University of Test',
    name: 'Bachelor of Testing',
    date: new Date(),
  };

  const skills: ISkills = {
    id: 1,
    nameSkill: 'Testing',
    imageSkill: "",
    percentageSkill: "30",
  };

  beforeEach(async () => {
    // Stubbed services
    estadosUIServiceStub = {
      stateFE: of({ visibility: true }),
      stateSK: of({ visibility: false }),
      toast$: of('test message'),
    };
    profileServiceStub = {};

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: EstadosUIService, useValue: estadosUIServiceStub },
        { provide: ProfileServiceService, useValue: profileServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to states and toast', () => {
    expect(component.isFormEducation).toBeTrue();
    expect(component.isFormSkill).toBeFalse();
    expect(component.msg).toBe('test message');
    expect(component.isToast).toBeTrue();
  });

  it('should receive selected education item', () => {
    component.receiveSelectedItemEdu(education);
    expect(component.itemEducationSelected).toEqual(education);
  });

  it('should receive selected skill item', () => {
    component.receiveSelectedItemSkill(skills);
    expect(component.itemSkillSelected).toEqual(skills);
  });
});